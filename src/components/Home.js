import React, { useState, useEffect } from "react";
import "./styles/Home.css";

const images = [
  "./images/IMG_3272.JPG",
  "./images/IMG_1440.JPG",
  "./images/IMG_2985.JPG",
  "./images/SG-Fricktal-Pro-U19.jpg",
  "./images/skifoarn.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <section className="home">
      <div id="home-title">
        <p id="first-p">Mein Name ist</p>
        <h2>Janick Hurschler</h2>
        <p>willkommen zu meinem Portfolio</p>
      </div>
      <div className="carousel-container">
        <div className={`carousel-slide ${fade ? "fade-in" : "fade-out"}`}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Home;
