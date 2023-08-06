import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'
import profile from '../profile.jpeg'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img
          src={profile}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '100%',
            marginBottom: 0,
            lineHeight: 0,
          }}
        />
        <h2 className="about_intro"> Hi, My Name is Hritik</h2>
        <div className="prompt">
          <p>
            An aspiring software engineer with a passion for learning and
            creating.
          </p>
          <a href="https://www.linkedin.com/in/hritik2002/" target={'_blank'}>
            <LinkedInIcon className="socialIcon" />
          </a>
          <a href="mailto:sharmahritik2002@gmail.com" target={'_blank'}>
            <EmailIcon className="socialIcon" />
          </a>
          <a href="https://www.github.com/hritik2002/" target={'_blank'}>
            <GithubIcon className="socialIcon" />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, NextJS, ReduxJS, React Native, HTML, CSS, SCSS,
              StyledComponents, , BootStrap, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript, Typescript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
