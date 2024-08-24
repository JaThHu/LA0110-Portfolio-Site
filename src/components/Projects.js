import React from "react";
import "./Projects.css";

const ProjectCard = ({ title, image, description, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Zum Projekt
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="siteTitle">Meine Projekte</h2>
      <div className="projects-grid">
        <ProjectCard
          title="SnakeGame"
          image="./images/SnakeGame.png"
          description="Mein 1-Tages-Projekt. Inspriert vom originalen Snake Spiel."
          link="https://github.com/JaThHu/SnakeGame"
        />
        <ProjectCard
          title="Lachleitung"
          image="./images/Lachleitung.png"
          description="Global-Chat mit Google-Login als Webapp. Ein Projekt, dass wir in Partnerarbeit erstellt haben."
          link="https://github.com/JaThHu/Lachleitung"
        />
        <ProjectCard
          title="Handball Webseite"
          image="./images/HandballSeite.png"
          description="Eine Webseite rund um Handball. Ein Projekt aus dem erstem Schuljahr."
          link="https://github.com/JaThHu/Handball-Webseite"
        />
        <ProjectCard title="#" image="#" description="#" link="#" />
      </div>
    </section>
  );
};

export default Projects;
