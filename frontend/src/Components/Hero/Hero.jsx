import React, { useState, useEffect } from "react";
import "./Hero.css";
import Hero_bg01 from "../../assets/hero-bg.jpg";
import Hero_bg02 from "../../assets/hero-bg02.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollPosition === 0) {
        setTimeout(() => {
          setScrollPosition(-50);
        }, 5000);
      } else if (scrollPosition === -50) {
        setScrollPosition(0);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  return (
    <div className="hero">
      <div className="hero-bg">
        <ul
          style={{
            transform: `translateX(${scrollPosition}%)`,
          }}
        >
          <li>
            <img src={Hero_bg01} alt="" />
            <div className="hero-bg-filter"></div>
            <div className="hero-bg-content">
              <h1 className="hero-title">Capture the Moment</h1>
              <p className="hero-subtitle">
                Explore the world through your lens
              </p>
              <Link to="/gallery" className="btn btn-primary">
                View Gallery
              </Link>
            </div>
          </li>
          <li>
            <img src={Hero_bg02} alt="" />
            <div className="hero-bg-filter"></div>
            <div className="hero-bg-content">
              <h1 className="hero-title">Embrace the Journey</h1>
              <p className="hero-subtitle">
                Discover the beauty of our world through your lens
              </p>
              <Link to="/gallery" className="btn btn-primary">
                Start Exploring
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
