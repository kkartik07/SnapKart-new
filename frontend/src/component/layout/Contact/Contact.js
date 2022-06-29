import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:kartikkankurte@gmail.com">
        <Button>Contact: kartikkankurte@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
