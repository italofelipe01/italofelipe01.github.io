import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => (
          <details className="accord-panel" key={section["title"]} open>
            <summary
              className="accord-summary"
              style={{
                backgroundColor: theme.body,
                borderColor: theme.headerColor,
                color: theme.text,
              }}
            >
              {section["title"]}
            </summary>
            <div className="accord-content">
              {section["experiences"].map((experience, index) => (
                <ExperienceCard
                  key={`${section["title"]}-${experience.title}`}
                  index={index}
                  totalCards={section["experiences"].length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </details>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
