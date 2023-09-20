import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import mail from "../../../images/mail.png"

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kartikkankurte7@gmail.com">
        <Button><img src={mail} alt="mail"/> &nbsp;&nbsp;Contact: kartikkankurte7@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
