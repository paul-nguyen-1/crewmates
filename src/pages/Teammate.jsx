import React from "react";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeammateCard from "../components/TeammateCard";

function Teammate() {
  const { id } = useParams();
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Posts").select().eq("id", id);
      // console.log(data);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  return (
    <div className="Teammate">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <TeammateCard
            id={post.id}
            title={post.title}
            speed={post.speed}
            color={post.color}
          />
        ))
      ) : (
        <h2>{"Nothing to see yet 😞"}</h2>
      )}
    </div>
  );
}

export default Teammate;
