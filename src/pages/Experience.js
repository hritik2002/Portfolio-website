import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

const experiences = [
  {
    timeline_title: 'Software Engineer - Physics Wallah',
    timeline_work_date: `Apr 2023 - July 2023 (3 months)`,
    timeline_title_link:
      'https://www.linkedin.com/company/physicswallah/mycompany/',
    timeline_subtitle: 'Onsite, Internship',
    timeline_content: [
      'Led the creation of a whiteboard application using ElectronJS, ReactJS, and Canvas for teachers, enabling seamless writing, erasing, PDF annotation, import, and export functionalities.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - Mosaic Wellness',
    timeline_work_date: `Apr 2023 - July 2023 (3 months)`,
    timeline_title_link: 'https://www.linkedin.com/company/mosaicwellness/',
    timeline_subtitle: 'Onsite, Internship',
    timeline_content: [
      'Leveraged the OpenAI Translations API to enhance speech-to-text conversion, resulting in seamless and accurate call audit processing.',
      'Developed a user-friendly React-based frontend for efficient access and analysis of call audit results, leading to informed decision-making and significant cost savings.',
      'Created a storyTime application using ReactJS, OpenAI, and Mid Journey, generating captivating stories for kids with relevant images, contributing to a notable 15% increase in app retention.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - DecoverHQ',
    timeline_work_date: 'Feb 2023 - Apr 2023 (3 Months)',
    timeline_title_link: 'https://www.linkedin.com/company/decoverhq/',
    timeline_subtitle: 'Remote, Internship',
    timeline_content: [
      'Led the development of AI based search engine on unstructured data.',
      'Integrated the backend with slack and whatsapp to provide easy access of application to the end user.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - Appture Technology',
    timeline_work_date: `Dec 2022 - Jan 2023 (2 months)`,
    timeline_title_link: 'https://www.linkedin.com/company/appture-technology/',
    timeline_subtitle: 'Remote, Internship',
    timeline_content: [
      'Utilized Nextjs and Tailwind CSS to migrate frontend to a new design.',
      'Optimized landing page in Nextjs by following best practices for improved performance.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - Narad.ai',
    timeline_work_date: 'Sep 2022 - Nov 2022 (3 months)',
    timeline_title_link: 'https://narad.ai/',
    timeline_subtitle: 'Remote, Internship',
    timeline_content: [
      'Led the development of a location based chat application using google’s location api.',
      'Utilized a technology stack including React Native, React JS, and Firebase to develop features and functionalities as per requirement, ensuring timely completion of the project.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - Cohyk',
    timeline_work_date: 'May 2022 - Jul 2022 (3 months)',
    timeline_title_link: 'https://cohyk.com/',
    timeline_subtitle: 'Remote, Internship',
    timeline_content: [
      'Led the development of the front-end utilizing Next.js, Redux.js, and Material-UI as a member of a 2 - developer team.',
      'Collaborated with the founder on design and product discussions, resulting in a user-centered design and seamless integration with several APIs.',
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Software Engineer - Mosaic Wellness',
    timeline_work_date: 'Nov 2021 - Apr 2022 (6 months)',
    timeline_title_link: 'https://www.mosaicwellness.in/',
    timeline_subtitle: 'On-site, Internship',
    timeline_content: [
      'Developed an annotation tool using React.JS that improved the disease predictions accuracy by 20%.',
      'Built a component library in React Storybook that reduced development time by 30% and allowed for efficient and reusable components.',
      `Utilized React.JS, Redux.JS, and React-Storybook technology stack to develop the annotation tool and 
      component library, resulting in a 90% success rate in meeting project requirements.`,
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Teaching assistant | Mentor - Coding Ninjas',
    timeline_work_date: 'Sep 2021 - Jan 2022 (5 months)',
    timeline_title_link: 'https://www.codingninjas.com/',
    timeline_subtitle: 'Remote, Internship',
    timeline_content: [
      `Provided educational support to 200+ students in learning key concepts of C++, data structures., 
      and algorithms, resulting in improved understanding and performance.
     `,
      `Resolved over 700+ student doubts with an overall rating of 4.5/5.0, indicating high satisfaction with 
      the support provided.`,
    ],
    timeline_icon: <WorkIcon />,
    icon_style: { background: '#e9d35b', color: '#fff' },
  },
  {
    timeline_title: 'Thadomal Shahani Engineering College',
    timeline_title_link: 'https://tsec.edu',
    timeline_work_date: 'Feb 2021 - Jul 2024',
    timeline_subtitle: 'Bachelors in Computer Engineering',
    timeline_content: ["Web team lead at Dev's Club (College Commitee)."],
    timeline_icon: <SchoolIcon />,
    icon_style: { background: '#3e497a', color: '#fff' },
  },
]

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {experiences.map(exp => (
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
                  textDecoration: 'none',
                  color: '#213280',
                }}
                target="_blank"
                title={exp.timeline_title_link}
              >
                {exp.timeline_title}
              </a>
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{
                paddingBottom: '4px',
              }}
            >
              {exp.timeline_subtitle}
            </h4>
            {exp.timeline_content.map(content => (
              <p style={{ margin: 0, paddingLeft: '10px', marginTop: '10px' }}>
                {' '}
                {content}
              </p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
