import React from "react";
import HPE from "../assets/HPEBadge.JPG";

const Resources = () => {
  return (
    <div className="landing-content-area">
      <div className="about-top-container">
        <div className="base-border">
        <div className="exp-container">
        <div className="exp-left">
        <h1>Hewlett Packard Enterprise</h1>
        <h2>UI/UX Engineer</h2>
          <div className="landing-middle-content">
              <div className="landing-bottom-text">
                  I chose to be an engineer because I've always been fascinated by how things work, fueling my curiosity and drive to learn. With a natural inclination for puzzle-solving, computer science was an attractive choice for me. It allows me to apply my analytical thinking skills to decipher complex problems and find innovative solutions. The ever-evolving nature of the field excites me, offering continual challenges and opportunities for creativity. Ultimately, I'm committed to making meaningful contributions to engineering and pushing the boundaries of what's possible.
              </div>
          </div>
          <h2>Technical Marketing Engineer Intern</h2>
          <div className="landing-middle-content">
              <div className="landing-bottom-text">
                  I chose to be an engineer because I've always been fascinated by how things work, fueling my curiosity and drive to learn. With a natural inclination for puzzle-solving, computer science was an attractive choice for me. It allows me to apply my analytical thinking skills to decipher complex problems and find innovative solutions. The ever-evolving nature of the field excites me, offering continual challenges and opportunities for creativity. Ultimately, I'm committed to making meaningful contributions to engineering and pushing the boundaries of what's possible.
              </div>
          </div>
        </div>
        <div className="exp-right">
          <img src={HPE} className="medium-image" alt="HPE Badge"></img>
        </div>
        </div>
        </div>
        <div className="base-border">
          <h1>INRIX</h1>
          <h2>Software Development Engineer Intern</h2>
          <div className="landing-middle-content">
              <div className="landing-bottom-text">
                  As a bilingual engineer fluent in English and French, I embrace the power of effective communication across cultures. Being a person of color, I take pride in my skills and representation as an African engineer. I aim to inspire others, break down barriers, and foster inclusivity in the field, contributing to a more diverse and equitable engineering community.
              </div>
          </div>
        </div>
        <div className="base-border">
        <h1>Santa Clara University</h1>
        <h2>Peer Career Advisor</h2>
          <div className="landing-middle-content">
              <div className="landing-bottom-text">
              In my free time, I enjoy engaging in outdoor activities such as tennis, swimming, water polo, and surfing. These pursuits allow me to stay active while immersing myself in the beauty of nature. Drawing and singing are also passions of mine, providing creative outlets for self-expression. When it comes to music, my favorite genres encompass pop, indie, and acoustic, offering a diverse range of sounds and emotions. These hobbies and interests bring joy and fulfillment to my life, allowing me to explore various avenues of self-discovery and relaxation.
              </div>
          </div>
        <h2>Resident Assistant</h2>
          <div className="landing-middle-content">
              <div className="landing-bottom-text">
              In my free time, I enjoy engaging in outdoor activities such as tennis, swimming, water polo, and surfing. These pursuits allow me to stay active while immersing myself in the beauty of nature. Drawing and singing are also passions of mine, providing creative outlets for self-expression. When it comes to music, my favorite genres encompass pop, indie, and acoustic, offering a diverse range of sounds and emotions. These hobbies and interests bring joy and fulfillment to my life, allowing me to explore various avenues of self-discovery and relaxation.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Resources;