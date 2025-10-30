import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { Fade } from "react-awesome-reveal";
import DataScienceImg from "./DataScienceImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  return <CloudInfraImg theme={props.theme} />;
}

const SkillSection = (props) => {
  const theme = props.theme;
  return (
    <div>
      {props.skills.data.map((skill, i) => {
        return (
          <div key={i} className="skills-main-div">
            <Fade left duration={2000}>
              <div className="skills-image-div">
                {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        key={i}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
