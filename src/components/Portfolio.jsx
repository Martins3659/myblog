import React from "react";
import github from "../assets/mdi_github.png";
import firstport from "../assets/first-port.png";
import secport from "../assets/sec-port.png";
import thirdport from "../assets/third-port.png";
import arrow from "../assets/green arrow.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="d-flex justify-content-between align-items-center pop">
        <div className="recent">
          <p className="m-0">Recent Projects</p>
          <h5 className="m-0">My Portfolio</h5>
        </div>
        <a
          href="https://github.com/Martins3659"
          target="_blank"
          className="d-flex git"
        >
          <img src={github} alt="" />
          <p className="m-0">Visit My GitHub</p>
        </a>
      </div>
      <div className="portfolio-text">
        <div className="port">
          <img src={firstport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Ahuse</h4>
              <p className="m-0">
                Makes finding rental homes easy with intuitive search,
                comprehensive listings, and direct communication with house
                owners.
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={secport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">App Dashboard</h4>
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                nesciunt tenetur omnis nobis aliquam nisi, quidem magnam velit
                reiciendis mollitia provident, fugiat ea! Velit, maxime
                suscipit. Beatae, veniam error quam voluptatem.{" "}
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Project</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
        <div className="port">
          <img src={thirdport} alt="" />
          <div className="port-text">
            <div className="porto">
              <h4 className="m-0">Easy Rent</h4>
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quisquam qui esse quis, quia repellat alias sit
                quam minus id.
              </p>
            </div>

            <a href="#" className="web">
              <h5 className="m-0">View Website</h5>
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
