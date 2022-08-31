import React from "react";
import "../styles/Achievements.css";

export default function Achievements() {
  return (
    <div className="achievements">
      <h1> Achievements</h1>
      <ul className="list">
        <li className="item">
          Ranked <b>5089</b> among <b>24k+</b> contestants on leetcode weekly
          contest 306, held on 14th august 2022.
        </li>
        <li>
          Solved over <b>500+</b> DSA problems, overall on various platforms.
        </li>
        <li>
          Under top <b>2%</b> of people on stack overflow community with overall{" "}
          <b>1.3k+ </b>
          reputation .
        </li>
        <li>Web team lead at college committee.</li>
        <li>
          Led a team of <b>5</b> to build a committee website
        </li>
        <li>
          Mentored over <b>200+</b> students to start their coding journey,
          provided resources to learn web development.
        </li>
      </ul>
     
      <a
        href="https://drive.google.com/file/d/11kM5S_Az0lm7ykfvJGY0-RzvrQebgdTW/view?usp=sharing"
        target={"_blank"}
      >
        Resume here
      </a>
    </div>
  );
}