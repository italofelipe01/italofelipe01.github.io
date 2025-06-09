/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Italo's Portfolio",
  description:
    "BI and Data Analyst 📊 | Tech Explorer 🔍 | Lifelong Learner 🚀 Passionate about deciphering data and unlocking insights!",
  og: {
    title: "Italo Felipe Portfolio",
    type: "website",
    url: "https://italofelipe01.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ítalo Felipe",
  logo_name: "ItaloFelipe",
  nickname: "producer",
  subTitle:
    "BI and Data Analyst 📊 | Tech Explorer 🔍 | Lifelong Learner 🚀 Passionate about deciphering data and unlocking insights!",
  resumeLink:
    "https://drive.google.com/file/d/1zFEbgd0lRQu7V_mxwicssmNFvrGRxD64/view?usp=sharing",
  portfolio_repository:
    "https://github.com/italofelipe01/italofelipe01.github.io",
  githubProfile: "https://github.com/italofelipe01/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/italofelipe01/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/italomorais/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/@italofelipe01",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:italofelipelira@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/italofelipe.morais/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/italof.morais/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Data Analyst",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Identify and obtain relevant datasets.",
        "⚡ Remove errors, duplicates, and irrelevant information from raw data.",
        "⚡ Apply statistical techniques to identify patterns and trends.",
        "⚡ Create charts and dashboards to communicate insights effectively.",
        "⚡ Interpret results and prepare reports with recommendations.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "devicon:jupyter-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Looker",
          fontAwesomeClassname: "logos:looker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Apache Airflow",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900",
          },
        },
        {
          skillName: "Dbeaver",
          fontAwesomeClassname: "devicon:dbeaver",
          style: {
            backgroundColor: "transparent",
            color: "#0089D6",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "skill-icons:sqlite",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "devicon:apacheairflow",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidade Federal de Goiás",
      subtitle: "Bachelor's degree in Mechanical Engineering",
      logo_path: "ufg_logo.png",
      alt_name: "UFG",
      duration: "2017 - 2025",
      descriptions: [
        "⚡ Studied in Mechanical Engineering enhances an engineer's analytical skills by designing, analyzing, and optimizing mechanical systems to solve complex challenges",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Cloud Computing.",
      ],
      website_link: "https://ufg.br/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Competências Profissionais, Emocionais e Tecnológicas",
      subtitle: "- Leandro Karnal e Luiza Helena Trajano.",
      logo_path: "puc_rs.png",
      certificate_link:
        "https://drive.google.com/file/d/1ue1xjUGDOvlz-Tqni3bcLdesnLRpoH_q/view",
      alt_name: "puc_rs",
      color_code: "#8C151599",
    },
    {
      title: "Apache Airflow",
      subtitle: "- Millena G. Pereira",
      logo_path: "apache_airflow.png",
      certificate_link:
        "https://drive.google.com/file/d/1pYWx8EU9Go0Ktfv8ppokrs9pExGKcwV6/view",
      alt_name: "apache_airflow",
      color_code: "#1F70C199",
    },
    {
      title: "Power BI",
      subtitle: "- Daniel Siqueira",
      logo_path: "power_bi.png",
      certificate_link:
        "https://drive.google.com/file/d/1xgo4b9FlkVAjPTNws7Y7Jtmeo05gfv8L/view",
      alt_name: "power_bi",
      color_code: "#F0E199",
    },
    {
      title: "DAX e ETL com Power BI:",
      subtitle: "- Victorino Vila",
      logo_path: "power_bi.png",
      certificate_link:
        "https://drive.google.com/file/d/1oJZIFQw_kOowsb9QOhdlGa_Q8xjQSXkE/view",
      alt_name: "dax_etl",
      color_code: "#F0E199",
    },
    {
      title: "Estatíttica com Python:",
      subtitle: "- Rodrigo Fernando Dias",
      logo_path: "python_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1SD8P4_P7fm9Zh6ukxdAxzn2sH6UCsFZ2/view",
      alt_name: "python",
      color_code: "#D83B0199",
    },
    {
      title: "Git e GitHub:",
      subtitle:
        "- Gabrielle Ribeiro Gomes e Rodrigo da Silva Ferreira Caneppele",
      logo_path: "github_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1jLcK9ZGEeSh0oQm911hBTg_9133edHAB/view",
      alt_name: "git_github",
      color_code: "#00000099",
    },
    {
      title: "Google Data Studio",
      subtitle: "- Victorino Vila",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10Y7Uh8BIdrcoETRtlXpC0L7q7q02Rttv/view",
      alt_name: "google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Data Studio: Filtros e Funções",
      subtitle: "- Victorino Vila",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12yHH0n1M4aVzWkqZzuxm7QoEgPd4GgBd/view",
      alt_name: "filtos_funcoes",
      color_code: "#0C9D5899",
    },
    {
      title: "PostgresSQL",
      subtitle: "- Diogo Mascarenhas",
      logo_path: "postgresql_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1nk5MBm22P_NxUzZ7GuYRx8hHE964F0KB/view",
      alt_name: "postgresql",
      color_code: "#1F70C199",
    },
    {
      title: "PostgreSQL: Views, sub-consultas e funções",
      subtitle: "- Vinicius Dias",
      logo_path: "postgresql_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1UHy7dJtMVycO8wufpdEOfN5-fCAg92hJ/view",
      alt_name: "postgresql_views",
      color_code: "#1F70C199",
    },
    {
      title: "Power Bi Desktop",
      subtitle: "- David Neves",
      logo_path: "power_bi.png",
      certificate_link:
        "https://drive.google.com/file/d/1cjY5CY463U-W9-8U6SwTnyf602yMVoU_/view",
      alt_name: "pb_desktop",
      color_code: "#F0E199",
    },
    {
      title: "Data Science",
      subtitle: "- Guilherme Lima",
      logo_path: "data_science.png",
      certificate_link:
        "https://drive.google.com/file/d/12NIXRzEGSrW_ajMgSWLL_JPhSyJplpJF/view",
      alt_name: "data_science",
      color_code: "#E6E6E6",
    },
    {
      title: "Gestor CRM PipeRun",
      subtitle: "- Piperun Academy",
      logo_path: "piperun_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1FGOSPgUgTOB-KZeqmHCl1quDtEcmP8xj/view",
      alt_name: "piperun",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Applied knowledge in business intelligence (BI) coupled with strong group communication and task routine organization. Senior-level professional experience in extracting, organizing, and manipulating data to effectively identify process improvements and execute them successfully.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Data Analyst",
          company: "EBM Incorporações",
          company_url: "https://ebm.com.br/",
          logo_path: "logo-ebm.png",
          duration: "Aug 2024 - Now",
          location: "Goiânia - Goiás",
          description:
            "Responsible for analyzing data and generating insights focused on the performance of the development company's departments, creating BI dashboards and reports to monitor and optimize results, and collaborating with multidisciplinary teams to identify improvement opportunities and support decision-making",
          color: "#fc1f20",
        },
        {
          title: "Controller Analyst",
          company: "Urbanizamos",
          company_url: "https://urbanizamos.com.br/",
          logo_path: "download.jpeg",
          duration: "Jul 2021 - Aug 2024",
          location: "Goiânia - Goiás",
          description:
            "Continuously monitor the economic and financial performance of ventures through critical viability analyses and strategic projections to ensure sustainability and profitability, while planning and controlling expenses in collaboration with other departments to guarantee efficient investments, and preparing and presenting financial reports to partners to support profit distribution decisions.",
          color: "#fc1f20",
        },
        {
          title: "Senior Data Analyst",
          company: "Poli Soluções Digitais",
          company_url: "https://poli.digital/",
          logo_path: "logo-polidigital.svg",
          duration: "Jul 2021 - Aug 2024",
          location: "Goiânia - Goiás",
          description:
            "Responsible for interpreting and analyzing complex data sets to extract valuable insights and inform business decision-making. Developing and applying new concepts in Python language, as well as contributing to the development of the company's Data Warehouse and overseeing the management of all this data.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Poli Soluções Digitais",
          company_url: "https://poli.digital/",
          logo_path: "logo-polidigital.svg",
          duration: "Jan 2021 - Jul 2021",
          location: "Goiânia - Goiás",
          description:
            "Internship in data analysis and information control, focusing on the use of data analysis tools such as Excel and Power BI. Engaged in the creation and development of managing all key performance indicators (KPIs) for the company.",
          color: "#ee3c26",
        },
        {
          title: "Commercial intern",
          company: "Poli Soluções Digitais",
          company_url: "https://poli.digital/",
          logo_path: "logo-polidigital.svg",
          duration: "Apr 2019 - Dec 2020",
          location: "Goiânia - Goiás",
          description:
            "Intern in commercial activities, involved in tasks ranging from pre-sales to customer integration into the marketed platform.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Engineering project collaborator",
          company: "ELO Júnior Engenharias e Arquitetura",
          company_url: "https://www.linkedin.com/in/elojunior/",
          logo_path: "elo_engenharia_junior_logo.jpg",
          duration: "Jan 2018 - May 2021",
          location: "Goiânia - Goiás",
          description:
            "10+ years operating in the Goiás market as a multidisciplinary company, providing consulting services, undertaking innovative and affordable projects, and delivering tailored solutions to meet the needs of our clients.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2023 - PRESENT",
          location: "Work From Home",
          description:
            "Learning and having the opportunity to develop some of what I have acquired in order to dynamically contribute to open source projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My experience lies in the development and implementation of Data Analysis and Data Science projects, with a particular focus on implementing and visualizing them through dashboards, controlling processes based on the analysis of information and managing the continuous improvement of these processes.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I worked on and published some dashboards so that they can be viewed and some examples are provided below.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Alura Pets BI",
      createdAt: "2022-03-06T15:40:54Z",
      description:
        "A dashboard with valuable business information for a pet shop named Alura Pets (experimental only).",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiMWM1ZjAwMWEtZTAxNi00YTgxLWE4MTAtN2Q0MDc5ODIwYWQ4IiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Sales Score",
      createdAt: "2023-08-10T16:26:54Z",
      description:
        "Business Intelligence linking the score produced by logistic regression to potential upgrades in the sale of plan items.",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiMDNkMTg3YzktMDc0Mi00ZTVkLWIyMTQtM2RlN2UwNmFjYmUxIiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Sales Dashboard",
      createdAt: "2022-04-14T16:26:54Z",
      description: "Commercial dashboard example",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiOWMyZGM4M2ItNTBkZC00OWU5LTg1YzUtNjkwODk4OGI4MDAxIiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Olist Dashboard",
      createdAt: "2023-05-26T16:26:54Z",
      description: "Commercial dashboard example",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiZmQxM2EyYzItZTVkOS00NTk3LTlmYzQtNzYxZGRhNjZkMTMyIiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Zoop Megastore",
      createdAt: "2022-10-25T16:26:54Z",
      description: "Commercial dashboard example",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiZmIxOWNiOGYtODYzZS00OGZjLTljNzEtZDVmMWI1YmMyNzQyIiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
    {
      // id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Volume de mensagens",
      createdAt: "2023-09-13T16:26:54Z",
      description:
        "Dashboard for analyzing the volume of messages exchanged on the platform",
      url:
        "https://app.powerbi.com/view?r=eyJrIjoiNGRmYjI3OTctZmRjZC00OGI2LWEyN2QtZmQ4YWJhNTJhODNlIiwidCI6IjE5YzViY2VhLWY4YmEtNDE0OC1hOTFmLTYxZTk2YTBiYjM2YyJ9",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me_anime.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with organizes, and analyzes information to provide valuable insights to organizations. Including cleaning and preparing data, conducting exploratory analyses, developing analytical models, interpreting results, and assisting in strategic decision-making. They often collaborate with multidisciplinary teams and communicate their findings in an understandable manner to various stakeholders..",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Av. Nápoli, Goiânia, GO, CEP: 74367-640",
    locality: "Goiânia",
    country: "BR",
    region: "Goiás",
    postalCode: "74367-640",
    streetAddress: "Av. Nápoli",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/uy4W7V9Qrtas3UB57",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+55 (62) 98109-0041",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  publicationsHeader,
  publications,
  projectsHeader,
  contactPageData,
};
