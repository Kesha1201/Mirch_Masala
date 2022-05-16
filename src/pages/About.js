import React from "react";
import Aboutimg from "../assets/About.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutimg})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        <center>
        We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.Stepping in the front door, customers are immediately greeted with delicious fragrances of coriander, ginger, turmeric and more; since carefully blended spices are infused into “real” Indian cuisine. The atmosphere is soothing with Indian and Middle Eastern music playing quietly while customers gaze at rich tapestries and painted fabrics.
        </center>
        </p>
      </div>
    </div>
  );
}

export default About;
