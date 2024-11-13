import React from "react";
import phone from "../assets/strategy.png";
import framework from "../assets/tag.png";
import testing from "../assets/carbon_ibm-engineering.png";
import cloud from "../assets/web.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-text">
        <h4 className="m-0">My Skills</h4>
        <h2 className="m-0">My Expertise</h2>
      </div>
      <div className="skill">
        <div className="first-skill">
          <div className="img-1">
            <img src={phone} alt="" />
          </div>
          <div className="first-skill-text">
            <h5 className="m-0">Responsive Design</h5>
            <p className="m-0">
              Proficient in creating adaptable designs that ensure smooth user
              experiences on any device and screen size.
            </p>
          </div>
        </div>
        <div className="first-skill">
          <div className="img-1">
            <img src={framework} alt="" />
          </div>
          <div className="first-skill-text">
            <h5 className="m-0">Front-End Frameworks</h5>
            <p className="m-0">
              Experienced in HTML, CSS, JavaScript, and React to build
              interactive, responsive, and user-centered interfaces.
            </p>
          </div>
        </div>
        <div className="first-skill">
          <div className="img-1">
            <img src={testing} alt="" />
          </div>
          <div className="first-skill-text">
            <h5 className="m-0">Testing and Debugging</h5>
            <p className="m-0">
              Skilled in using console tools for testing and debugging to
              maintain high code quality and dependability.
            </p>
          </div>
        </div>
        <div className="first-skill">
          <div className="img-1">
            <img src={cloud} alt="" />
          </div>
          <div className="first-skill-text">
            <h5 className="m-0">Cloud Services</h5>
            <p className="m-0">
              Adept in AWS, Azure, and Google Cloud with expertise in
              deployment, management, and designing cloud architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
