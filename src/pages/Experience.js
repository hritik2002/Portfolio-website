import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const experiences = [
  {
    timeline_title: "Software Engineer - Appture Technology",
    timeline_work_date: `Jan 2023 - Mar 2023 (3 months)`,
    timeline_title_link:
      "https://www.linkedin.com/in/appture-technology-79a83a166/?originalSubdomain=in",
    timeline_subtitle: "Remote, Internship",
    timeline_content: [
      "Utilized Nextjs and Tailwind CSS to migrate frontend to a new design.",
      "Optimized landing page in Nextjs by following best practices for improved performance.",
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Software Engineer - DecoverHQ",
    timeline_work_date: "Dec 2022 (1 Month)",
    timeline_title_link: "https://www.linkedin.com/company/decoverhq/",
    timeline_subtitle: "Remote, Internship",
    timeline_content: [
      "Created a Slack bot which is powered by openai and slack api.",
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Software Engineer - Narad.ai",
    timeline_work_date: "Sep 2022 - Nov 2022 (3 months)",
    timeline_title_link: "https://narad.ai/",
    timeline_subtitle: "Remote, Internship",
    timeline_content: [
      "Developed a React Native chat application, featuring advanced functionality such as capturing photos, recording videos, and sending the user's current location.",
      "Utilized various components and libraries to enhance user experience and meet project requirements.",
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Software Engineer - Cohyk",
    timeline_work_date: "May 2022 - Jul 2022 (3 months)",
    timeline_title_link: "https://cohyk.com/",
    timeline_subtitle: "Remote, Internship",
    timeline_content: [
      "Led the development of the front-end utilizing Next.js, Redux.js, and Material-UI as a member of a 2 - developer team.",
      "Collaborated with the founder on design and product discussions, resulting in a user-centered design and seamless integration with several APIs.",
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Software Engineer - Mosaic Wellness",
    timeline_work_date: "Nov 2021 - Apr 2022 (6 months)",
    timeline_title_link: "https://www.mosaicwellness.in/",
    timeline_subtitle: "On-site, Internship",
    timeline_content: [
      "Developed an annotation tool using React.JS that improved the disease predictions accuracy by 20%.",
      "Built a component library in React Storybook that reduced development time by 30% and allowed for efficient and reusable components.",
      `Utilized React.JS, Redux.JS, and React-Storybook technology stack to develop the annotation tool and 
      component library, resulting in a 90% success rate in meeting project requirements.`,
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Teaching assistant | Mentor - Coding Ninjas",
    timeline_work_date: "Sep 2021 - Jan 2022 (5 months)",
    timeline_title_link: "https://www.codingninjas.com/",
    timeline_subtitle: "Remote, Internship",
    timeline_content: [
      `Provided educational support to 200+ students in learning key concepts of C++, data structures., 
      and algorithms, resulting in improved understanding and performance.
     `,
      `Resolved over 700+ student doubts with an overall rating of 4.5/5.0, indicating high satisfaction with 
      the support provided.`,
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: "#e9d35b", color: "#fff" },
  },
  {
    timeline_title: "Thadomal Shahani Engineering College",
    timeline_title_link: "https://tsec.edu",
    timeline_work_date: "Feb 2021 - Jul 2024",
    timeline_subtitle: "Bachelors in Computer Engineering",
    timeline_content: ["Web team lead at Dev's Club (College Commitee)."],
    timeline_icon: <SchoolIcon />,
    icon_style: { background: "#3e497a", color: "#fff" },
  },
];

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {experiences.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={exp.timeline_work_date}
            iconStyle={exp.icon_style}
            icon={exp.timeline_icon}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                href={exp.timeline_title_link}
                style={{
                  textDecoration: "none",
                  color: "#213280",
                }}
                target="_blank"
                title={exp.timeline_title_link}
              >
                {exp.timeline_title}
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{
              paddingBottom: "4px"
            }} >
              {exp.timeline_subtitle}
            </h4>
            {exp.timeline_content.map((content) => (
              <p style={{ margin: 0, paddingLeft: "10px", marginTop: "10px"}}> {content}</p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
