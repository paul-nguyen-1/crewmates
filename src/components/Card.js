import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, title, author, color }) => {
  return (
    <div className="Card">
      <h2 className="title">{"Crewmate: " + title}</h2>
      <h3 className="author">{"Speed: " + author}</h3>
      <h3 className="description">{"Color: " + color}</h3>
      <Link to={"edit/" + id}>
        <button className="betButton">Edit Teammate</button>
      </Link>
    </div>
  );
};

export default Card;
