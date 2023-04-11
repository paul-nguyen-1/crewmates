import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";
import { useEffect } from "react";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const updatePost = async (e) => {
    e.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        speed: post.speed,
        color: post.color,
      })
      .eq("id", id);

    window.location = "/gallery";
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await supabase.from("Posts").delete().eq("id", id);
    window.location = "/gallery";
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setPost((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Posts").select().eq("id", id);
      // console.log(data);
      setPost(data[0]);
    };
    fetchPost();
  }, [id]);

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
              value={post.title}
              onChange={handleChange}
            />
          </div>
          <div className="postCard">
            <label for="speed">Speed:</label>
            <input
              type="text"
              id="speed"
              name="speed"
              value={post.speed}
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
                  onChange={handleChange}
                />{" "}
                Red
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Green"
                  name="color"
                  onChange={handleChange}
                />{" "}
                Green
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Yellow"
                  name="color"
                  onChange={handleChange}
                />{" "}
                Yellow
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Blue"
                  name="color"
                  onChange={handleChange}
                />{" "}
                Blue
              </p>
              <p className="radio">
                <input
                  type="radio"
                  value="Pink"
                  name="color"
                  onChange={handleChange}
                />{" "}
                Pink
              </p>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={updatePost}
          style={{ height: "40px", fontSize:"18px" }}
        />
        <button
          className="deleteButton"
          onClick={deletePost}
          style={{
            height: "40px",
            width: "150px",
            alignSelf: "center",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
