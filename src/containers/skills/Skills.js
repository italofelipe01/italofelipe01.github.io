import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export default function Skills(props) {
  const { t } = useTranslation();
  const theme = props.theme;
  const skills = t("skills", { returnObjects: true });

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {t("whatIDo")}
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} skills={skills} />
    </div>
  );
}
