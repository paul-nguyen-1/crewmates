import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, speed, color }) => {
  return (
    <Link to={`/teammate/${id}`} style={{ textDecoration: "none" }}>
      <div className="Card">
        <img
          src={require(`../assets/${color}.webp`)}
          alt={`${color} fall guy`}
          style={{ height: "150px" }}
        />
        <h2 className="title">{"Crewmate: " + title}</h2>
        <h3 className="speed">{speed <= 0 ?  "Speed:" : `Speed: ${speed}mph`}</h3>
        <h3 className="description">{"Color: " + color}</h3>
        <Link to={"edit/" + id}>
          <button className="betButton">Edit Teammate</button>
        </Link>
      </div>
    </Link>
  );
};

export default Card;
