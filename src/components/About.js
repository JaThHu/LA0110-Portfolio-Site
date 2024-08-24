import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div class="timeline">
        <div class="container left">
          <div class="content">
            <h2>IMS</h2>
            <p>
              Start: 2022 <br></br>Alte Kanti Aarau
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>Bezirksschule</h2>
            <p>
              Start: 2019 <br></br>Oberstufe Frick
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
