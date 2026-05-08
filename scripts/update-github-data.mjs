import fs from "node:fs/promises";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.GITHUB_USERNAME || "italofelipe01";
const token = process.env.GITHUB_TOKEN;
const outputDir = path.resolve("src/shared/opensource");
const baseUrl = "https://api.github.com";
const requestHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const languageIcons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  TypeScript: "logos-typescript-icon",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};

async function github(pathname) {
  const response = await fetch(`${baseUrl}${pathname}`, {
    headers: requestHeaders,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub ${response.status} for ${pathname}: ${body}`);
  }

  return response.json();
}

async function githubUrl(url) {
  const response = await fetch(url, {
    headers: requestHeaders,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub ${response.status} for ${url}: ${body}`);
  }

  return response.json();
}

function repoOwner(owner) {
  return {
    avatarUrl: owner.avatar_url,
    login: owner.login,
    url: owner.html_url,
    __typename: owner.type,
  };
}

function repoShape(repo) {
  return {
    name: repo.name,
    url: repo.html_url,
    owner: repoOwner(repo.owner),
  };
}

function langShape(language) {
  return {
    name: language,
    iconifyClass: languageIcons[language] || "octicon:code",
  };
}

function stateForPullRequest(pr) {
  if (pr.merged_at) return "MERGED";
  if (pr.state === "open") return "OPEN";
  return "CLOSED";
}

async function writeJson(filename, data) {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(
    path.join(outputDir, filename),
    `${JSON.stringify(data, null, 2)}\n`
  );
}

async function fetchPullRequests() {
  const search = await github(
    `/search/issues?q=${encodeURIComponent(
      `author:${username} type:pr`
    )}&sort=created&order=desc&per_page=60`
  );
  const details = await Promise.all(
    search.items.map((item) => githubUrl(item.pull_request.url))
  );
  const data = details.map((pr) => ({
    id: pr.node_id,
    title: pr.title,
    url: pr.html_url,
    state: stateForPullRequest(pr),
    mergedBy: pr.merged_by
      ? {
          avatarUrl: pr.merged_by.avatar_url,
          url: pr.merged_by.html_url,
          login: pr.merged_by.login,
        }
      : null,
    createdAt: pr.created_at,
    number: pr.number,
    changedFiles: pr.changed_files,
    additions: pr.additions,
    deletions: pr.deletions,
    baseRepository: repoShape(pr.base.repo),
  }));

  return {
    open: data.filter((pr) => pr.state === "OPEN").length,
    merged: data.filter((pr) => pr.state === "MERGED").length,
    closed: data.filter((pr) => pr.state === "CLOSED").length,
    totalCount: data.length,
    data,
  };
}

async function fetchIssues() {
  const search = await github(
    `/search/issues?q=${encodeURIComponent(
      `author:${username} type:issue`
    )}&sort=created&order=desc&per_page=60`
  );
  const repoCache = new Map();

  async function issueRepository(item) {
    if (!repoCache.has(item.repository_url)) {
      repoCache.set(item.repository_url, githubUrl(item.repository_url));
    }

    return repoCache.get(item.repository_url);
  }

  const data = await Promise.all(
    search.items.map(async (issue) => {
      const repository = await issueRepository(issue);

      return {
        id: issue.node_id,
        closed: issue.state !== "open",
        title: issue.title,
        createdAt: issue.created_at,
        url: issue.html_url,
        number: issue.number,
        assignees: {
          nodes: issue.assignees.map((assignee) => ({
            avatarUrl: assignee.avatar_url,
            name: assignee.login,
            url: assignee.html_url,
          })),
        },
        repository: repoShape(repository),
      };
    })
  );

  return {
    open: data.filter((issue) => !issue.closed).length,
    closed: data.filter((issue) => issue.closed).length,
    totalCount: data.length,
    data,
  };
}

async function fetchProjects() {
  const repos = await github(
    `/users/${username}/repos?sort=updated&direction=desc&per_page=100`
  );
  const visibleRepos = repos.filter((repo) => !repo.fork).slice(0, 6);

  return {
    data: visibleRepos.map((repo) => ({
      id: repo.node_id,
      name: repo.name,
      createdAt: repo.created_at,
      url: repo.html_url,
      description: repo.description || "Repository maintained on GitHub.",
      isFork: repo.fork,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
      languages: repo.language ? [langShape(repo.language)] : [],
    })),
  };
}

async function fetchCommits() {
  const search = await github(
    `/search/commits?q=${encodeURIComponent(
      `author:${username}`
    )}&sort=committer-date&order=desc&per_page=30`
  );
  const details = await Promise.all(
    search.items.slice(0, 20).map((commit) => githubUrl(commit.url))
  );
  const data = search.items.slice(0, 20).map((commit, index) => ({
    sha: commit.sha,
    message: commit.commit.message.split("\n")[0],
    url: commit.html_url,
    committedDate: commit.commit.author?.date || commit.commit.committer?.date,
    additions: details[index]?.stats?.additions || 0,
    deletions: details[index]?.stats?.deletions || 0,
    repository: repoShape(commit.repository),
  }));

  return {
    totalCount: search.total_count,
    data,
  };
}

function buildOrganizations(...collections) {
  const organizations = new Map();

  collections
    .flatMap((collection) => collection.data)
    .forEach((item) => {
      const owner =
        item.repository?.owner ||
        item.baseRepository?.owner ||
        item.owner ||
        item.repository?.owner;

      if (owner?.__typename === "Organization") {
        organizations.set(owner.login, owner);
      }
    });

  return { data: [...organizations.values()] };
}

const [pullRequests, issues, projects, commits] = await Promise.all([
  fetchPullRequests(),
  fetchIssues(),
  fetchProjects(),
  fetchCommits(),
]);
const organizations = buildOrganizations(pullRequests, issues, projects, commits);

await Promise.all([
  writeJson("pull_requests.json", pullRequests),
  writeJson("issues.json", issues),
  writeJson("projects.json", projects),
  writeJson("commits.json", commits),
  writeJson("organizations.json", organizations),
]);

console.log(`Updated GitHub data for ${username}`);
console.log(`Pull requests: ${pullRequests.totalCount}`);
console.log(`Issues: ${issues.totalCount}`);
console.log(`Projects: ${projects.data.length}`);
console.log(`Commits shown: ${commits.data.length}`);
