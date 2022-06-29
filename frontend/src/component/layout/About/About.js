import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/kartikkankurte";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">Check my profiles</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/jpeg;base64,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"
              alt="Founder"
            />
            <Typography>Kartik Kankurte</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a e-commerce wesbite made by @kartikkankurte. Only with the
              purpose to teach MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Check my profiles</Typography>
            <a
              href="https://www.linkedin.com/in/kartik-kankurte-4094b9210/"
              target="blank"
            >
              <LinkedIn className="LinkedIn" />
            </a>

            <a href="https://instagram.com/kartikkankurte" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
