import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import {
  greeting,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { useTranslation } from "react-i18next";

const Projects = (props) => {
  const { t } = useTranslation();
  const theme = props.theme;
  const publications = t("publications", { returnObjects: true });

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {t("projectsTitle")}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t("projectsDescription")}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} theme={theme} />;
        })}
      </div>
      <Button
        text={t("moreProjects")}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />

      {/* Publications  */}
      {publications.data.length > 0 ? (
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {t("publicationsTitle")}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {t("publicationsDescription")}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <div className="repo-cards-div-main">
        {publications.data.map((pub) => {
          return <PublicationCard pub={pub} theme={theme} />;
        })}
      </div>

      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Projects;
