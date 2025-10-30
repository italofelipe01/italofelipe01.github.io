import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Educations = (props) => {
  const { t } = useTranslation();
  const theme = props.theme;
  const degrees = t("degrees", { returnObjects: true });

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {t("degreesReceived")}
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
