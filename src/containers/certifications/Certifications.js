import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { useTranslation } from "react-i18next";

const Certifications = (props) => {
  const { t } = useTranslation();
  const theme = props.theme;
  const certifications = t("certifications", { returnObjects: true });

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            {t("certifications")}
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
