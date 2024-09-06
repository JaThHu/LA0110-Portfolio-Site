import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <section className="home">
      <h2>
        Ich heisse Janick Hurschler,<br></br>willkommen zu meinem Portfolio
      </h2>
      <p>"Programmieren ist wie das erste Bier an einem Freitag Abend."</p>
      <div id="home-container">
        <a class="placeholder-box" href="/about">
          <img
            src="./images/nutzer.png"
            alt="about logo"
            className="home-logo"
          ></img>
        </a>

        <a class="placeholder-box" href="/projects">
          <img
            src="./images/projektmanagement.png"
            alt="projects logo"
            className="home-logo"
          ></img>
        </a>

        <a class="placeholder-box" href="/contact">
          <img
            src="./images/brief.png"
            alt="contact logo"
            className="home-logo"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Home;
