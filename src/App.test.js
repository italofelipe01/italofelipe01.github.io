import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str, options) => {
        if (options && options.returnObjects) {
          if (str === "skills") {
            return {
              data: [
                {
                  title: "Data Science & Data Analyst",
                  fileName: "DataScienceImg",
                  skills: [
                    "⚡ Identify and obtain relevant datasets.",
                  ],
                  softwareSkills: [
                    {
                      skillName: "Python",
                    },
                  ],
                },
              ],
            };
          }
          if (str === "socialMediaLinks") {
            return [
              {
                name: "Github",
                link: "https://github.com/italofelipe01/",
                fontAwesomeIcon: "fa-github",
                backgroundColor: "#181717",
              },
            ];
          }
        }
        return str;
      },
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
