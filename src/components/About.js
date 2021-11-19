import React from "react";
import github from "../assets/images/github.png";

function About() {
  return (
    <div className="store-component" id="about-sec">
      <br />
      <p>We're just a simple Mom and Pop Shop that sells letters.</p>
      <p>Check out more of our stores and projects here:</p>
      <span id="link-span">
        <a href="https://github.com/NBrennan26">
          <img id="github-img" src={github} alt="github logo" />
        </a>
      </span>
    </div>
  );
}

export default About;
