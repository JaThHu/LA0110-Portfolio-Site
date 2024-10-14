import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Janick Thomas Hurschler</p>
    </footer>
  );
};

export default Footer;
