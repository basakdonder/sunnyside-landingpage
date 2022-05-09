import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src="" alt="" id="img1" />
      </div>
      <div className="grid-item">
        <div className="grid-wrapper">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service agency specializing in helping brands grow
            fast. Engage your clients through compelling visuals that do most of
            the marketing for you.
          </p>
          <a href="/" id="a1">
            Learn More
          </a>
        </div>
      </div>
      <div className="grid-item">
        <img src="" alt="" id="img2" />
      </div>
      <div className="grid-item">
        <div className="grid-wrapper">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a calloborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a href="/" id="a2">
            Learn More
          </a>
        </div>
      </div>
      <div className="grid-item grid-item-bg1">
        <div className="grid-wrapper">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="grid-item grid-item-bg2">
        <div className="grid-wrapper">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning. high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
