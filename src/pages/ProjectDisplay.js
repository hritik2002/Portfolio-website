import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebAssetOutlined from "@material-ui/icons/LinkOutlined";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img style={{ height: "55vh" }} src={project.image} />
      <p className="projectDescription">{project.description}</p>
      <p>Skills: {project.skills}</p>
      <div>
        {project.githubLink ? (
          <a
            href={project.githubLink}
            target={"_blank"}
            style={{ marginRight: "14px" }}
          >
            <GitHubIcon />
          </a>
        ) : (
          <></>
        )}

        {project.websiteLink ? (
          <a href={project.websiteLink} target="_blank">
            <WebAssetOutlined />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
