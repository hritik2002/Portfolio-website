import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.twitter.com/Hritik_86" target={"_blank"}>
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/hritik2002" target={"_blank"}>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
