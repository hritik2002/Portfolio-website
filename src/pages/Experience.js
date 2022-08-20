import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2021 - Jun 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Thadomal Shahani, Mumbai, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor in Engineering
          </h4>
          <p> Computer Science, 9.1/10.0 cgpa</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2021 - Jan 2022 (5 Months)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Teaching Assistant - Coding Ninjas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote, Internship
          </h4>
          <p>
            Provided educational support to 𝟐𝟎𝟎+ 𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬 in learning key
            concepts of 𝐂++, 𝐃𝐚𝐭𝐚 𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞𝐬 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐡𝐦𝐬 𝐚𝐧𝐝 𝐎𝐎𝐏𝐒.
          </p>
          <p>Resolved over 𝟕𝟎𝟎+ doubts with overall 𝟒.𝟓/ 𝟓.𝟎 ratings</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2021 - Apr 2022 (6 Months)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Mosaic Wellness
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          <p>
            Worked on making a <b>prescription writer</b> for doctors’ portal
            with React.js and Redux.js.
          </p>
          <p>
            Worked on building a <b>component library</b> in React Storybook.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - July 2022 (3 Months)"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern - Cohyk.com
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, India</h4>
          <p>
            Created the <b>entire frontend</b> of the <b>MVP</b>(minimal viable
            product) using next.js and redux.js.
          </p>
          <p>
            Worked with the founder, where I was involved in the <b>design</b>{" "}
            and
            <b> discussion</b> of the product.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
