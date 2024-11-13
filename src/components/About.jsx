import React from "react";
import profiletwo from "../assets/2.jpg";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center">
      <div className="aboutme">
        <img src={profiletwo} width={700} height={900} alt="" />
      </div>
      <div className="about-text">
        <div className="first-abttext">
          <p>About</p>
          <h4>About Me</h4>
        </div>
        <p className="about-para">
          I'm Martins, an enthusiastic fullstack developer specializing in
          creating user-friendly, high-performance web applications that enhance
          customer satisfaction. I utilize technologies such as JavaScript,
          TypeScript, React, Next.js, Redux, Bootstrap, and GitHub to design and
          implement intuitive user interfaces for websites and web-based
          applications. <br />
          <br />
          <br />
          Additionally, I possess a foundational understanding of backend
          technologies like MongoDB, Express, and Node.js, and I am skilled in
          integrating APIs to ensure seamless functionality.
        </p>
      </div>
    </div>
  );
};

export default About;
