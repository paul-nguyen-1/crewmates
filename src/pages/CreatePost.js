import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [input, setInput] = useState({
    title: "",
    speed: "",
    color: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setInput((prev) => {
      return { ...prev, [name]: e.target.value };
    });
    console.log(input);
  };

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .insert({
        title: input.title,
        speed: input.speed,
        color: input.color,
      })
      .select();

    window.location = "/gallery";

    setInput({
      title: "",
      speed: "",
      color: "",
    });
  };

  return (
    <div className="createPost">
      <form>
        <div className="postCardContainer">
          <div className="postCard">
            <label for="title">Crewmate:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="postCard">
            <label for="speed">Speed:</label>
            <input
              type="number"
              id="speed"
              name="speed"
              value={input.speed}
              onChange={handleChange}
            />
          </div>
          <div className="postCard" style={{ height: "100%", width: "175px" }}>
            <label for="description">Color:</label>
            <div className="radioButtons">
              <p className="radio">
                <input
                  type="radio"
                  value="Red"
                  name="color"
                  checked={input.color === "Red"}
                  onChange={handleChange}
                />{" "}
                Red
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Green"
                  name="color"
                  checked={input.color === "Green"}
                  onChange={handleChange}
                />{" "}
                Green
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Yellow"
                  name="color"
                  checked={input.color === "Yellow"}
                  onChange={handleChange}
                />{" "}
                Yellow
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Blue"
                  name="color"
                  checked={input.color === "Blue"}
                  onChange={handleChange}
                />{" "}
                Blue
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Pink"
                  name="color"
                  checked={input.color === "Pink"}
                  onChange={handleChange}
                />{" "}
                Pink
              </p>
            </div>
          </div>
        </div>
        <input type="submit" value="Submit" onClick={createPost} style={{height:"40px"}} />
      </form>
    </div>
  );
};

export default CreatePost;
