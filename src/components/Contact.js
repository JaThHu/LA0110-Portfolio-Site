import React from "react";
import "./styles/Contact.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Kontaktiere mich</h2>
      <div className="contact-links">
        <a
          href="mailto:janickhurschler06@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <SiGmail className="contact-icon" />

          <span>E-Mail</span>
        </a>
        <a
          href="https://www.linkedin.com/in/janick-hurschler-574185304/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/JaThHu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
