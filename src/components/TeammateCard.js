import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function TeammateCard({ id, title, speed, color }) {
  if (speed < 10) {
    speed = "Pretty slow... lets get someone else!";
  } else if (speed < 50) {
    speed = "Not too shabby...";
  } else {
    speed = "Speed racer!";
  }

  return (
    <div className="Card">
      <img
        src={require(`../assets/${color}.webp`)}
        alt={`${color} fall guy`}
        style={{ height: "150px" }}
      />
      <h2 className="title">{"Crewmate: " + title}</h2>
      <h3 className="speed">{"Speed: " + speed}</h3>
      <h3 className="description">{"Color: " + color}</h3>
      <Link to={`/gallery/edit/${id}`}>
        <button className="betButton">Customize Teammate</button>
      </Link>
    </div>
  );
}

export default TeammateCard;
