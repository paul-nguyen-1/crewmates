import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../client";

const ReadPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order("created_at", { ascending: true });
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Card
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
};

export default ReadPosts;
