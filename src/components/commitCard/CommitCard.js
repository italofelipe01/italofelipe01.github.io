import React from "react";
import { Icon } from "@iconify/react";
import { Fade } from "../animation/Reveal";
import "./CommitCard.css";

export default function CommitCard({ commit }) {
  const committedDate = commit.committedDate?.split("T")[0] || "";

  return (
    <Fade bottom duration={1400} distance="30px">
      <article className="commit-card">
        <div className="commit-card-top">
          <Icon
            className="commit-icon"
            icon="octicon:git-commit"
            style={{ color: "#0969da" }}
          />
          <div className="commit-title-block">
            <a
              className="commit-title"
              href={commit.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {commit.message}
            </a>
            <p className="commit-subtitle">
              {commit.sha.slice(0, 7)} committed on {committedDate}
            </p>
          </div>
        </div>
        <div className="commit-card-bottom">
          <p className="commit-repo">
            Repository:{" "}
            <a
              href={commit.repository.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {commit.repository.owner.login}/{commit.repository.name}
            </a>
          </p>
          <div className="commit-stats" data-no-translate>
            <strong className="commit-additions">+{commit.additions}</strong>
            <strong className="commit-deletions">-{commit.deletions}</strong>
          </div>
        </div>
      </article>
    </Fade>
  );
}
