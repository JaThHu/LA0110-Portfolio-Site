import React from "react";
import "./styles/Projects.css";

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
          title="Frickdart"
          image="./images/Frickdart.png"
          description="Eine Dartzählapp, als Webapp mit React und Firebase für Speicherung, die sich auf drei beliebte Spielmodi konzentriert: 301/501, Around the Clock und High Score. Ein Schulprojekt in Einzerlarbeit."
          link="https://github.com/JaThHu/SnakeGame"
        />
        <ProjectCard
          title="Frickasino"
          image="./images/Frickasino.png"
          description="Eine interaktive Casino-Webseite, auf der Benutzer beliebte Casinospiele wie Baccarat, Slots, Roulette und Blackjack spielen können. Ein Schulprojekt in Gruppenarbeit."
          link="https://github.com/JaThHu/SnakeGame"
        />
        <ProjectCard
          title="SnakeGame"
          image="./images/SnakeGame.png"
          description="Mein 1-Tages-Projekt. Inspiriert vom originalen Snake Spiel."
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
      </div>
    </section>
  );
};

export default Projects;
