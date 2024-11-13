import React from "react";
import { Link } from "react-scroll";
import profile from "../assets/1.jpg";

const Header = () => {
  return (
    <div>
      <header id="header" className="d-flex">
        <div className="header-text">
          <h4 className="m-0">Hey, I am Martins</h4>
          <h2 className="m-0">
            I develop dynamic and User-Centered Web Applications
          </h2>
          <p className="m-0">
            My expertise spans both front-end and back-end development, enabling
            me to build comprehensive solutions that meet diverse client needs.
          </p>

          <Link to="contact" className=" header-button ">
            Get In Touch
          </Link>
        </div>
        <div className="header-image">
          <img src={profile} width={700} height={900} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
