import React from "react";
import "../App.css";
import banner from "../assets/fallguyshome.webp";
import gif from "../assets/giphy.gif";

function Home() {
  return (
    <div className="Home">
      <img src={banner} alt="banner" style={{ height: "150px" }} />
      <h1>Welcome to the Fall Guys Teammate Creator!</h1>
      <p>
        Here is where you can create your very own set of crewmates before
        sending them off into the next challenge!
      </p>
      <img src={gif} alt="gif" style={{ height: "125px" }} />
    </div>
  );
}

export default Home;
