import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting } from "../../portfolio.js";
import { useTranslation } from "react-i18next";

const Contact = (props) => {
  const { t } = useTranslation();
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assests/images/me_anime.png`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {t("contactTitle")}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t("contactDescription")}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text={t("seeMyResume")}
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {t("blogSection.title")}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t("blogSection.subtitle")}
              </p>
              <div className="blogsite-btn-div">
                {/* <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  /> */}
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
            <div className="address-heading-text-div">
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {t("addressTitle")}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t("addressSubTitle")}
              </p>
              <h1
                className="address-heading-text"
                style={{ color: theme.text }}
              >
                {t("phoneTitle")}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {t("phoneSubTitle")}
              </p>
              <div className="address-btn-div">
                <Button
                  text={t("visitOnGoogleMaps")}
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
};

export default Contact;
