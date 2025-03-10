import React from "react";
import "./styles/About.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";

const About = () => {
  return (
    <div className="about-container">
      <div className="header">
        <div className="profile-picture">
          <img
            src="./images/Lebenslauf_Bild.jpg"
            alt="Bild von mir"
            className="home-logo"
          ></img>
        </div>
        <div className="info">
          <h2>Über mich</h2>

          <table className="info-table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Janick Thomas Hurschler</td>
              </tr>
              <tr>
                <td>Geburtstag</td>
                <td>23.05.2006</td>
              </tr>
              <tr>
                <td>Hobby</td>
                <td>Handball</td>
              </tr>
              <tr>
                <td>Wohnort</td>
                <td>Zeihen</td>
              </tr>
              <tr>
                <td>Ausbildung</td>
                <td>Informatiker Applikationsentwicklung EFZ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="info">
        <h2>Meine Skills</h2>
      </div>

      <div className="skills-container">
        <div className="skill-card">
          <FaReact />
          <div className="skill-text">React.js</div>
        </div>
        <div className="skill-card">
          <IoLogoJavascript />
          <div className="skill-text">Javascript</div>
        </div>
        <div className="skill-card">
          <FaHtml5 />
          <div className="skill-text">HTML 5</div>
        </div>
        <div className="skill-card">
          <FaCss3Alt />
          <div className="skill-text">CSS 3</div>
        </div>
        <div className="skill-card">
          <BsFiletypeSql />
          <div className="skill-text">SQL</div>
        </div>
        <div className="skill-card">
          <div className="skill-2">.NET</div>
          <div className="skill-text">.NET</div>
        </div>
        <div className="skill-card">
          <DiMongodb />
          <div className="skill-text">MongoDB</div>
        </div>
        <div className="skill-card">
          <div className="skill-2">C#</div>
          <div className="skill-text">C#</div>
        </div>
      </div>
    </div>
  );
};

export default About;
