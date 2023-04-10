import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

const App = () => {
  const descr =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const posts = [
    {
      id: "1",
      title: "Cartwheel in Chelsea 🤸🏽‍♀️",
      author: "Harvey Milian",
      color:"White"
    },
    {
      id: "2",
      title: "Love Lock in Paris 🔒",
      author: "Beauford Delaney",
      color:"Blue"
    },
    {
      id: "3",
      title: "Wear Pink on Fridays 🎀",
      author: "Onika Tonya",
      color:"Red"
    },
    {
      id: "4",
      title: "Adopt a Dog 🐶",
      author: "Denise Michelle",
      color:"White"
    },
  ];

  // Sets up routes
  let element = useRoutes([
    {
      path: "/gallery",
      element: <ReadPosts data={posts} />,
    },
    {
      path: "/gallery/edit/:id",
      element: <EditPost data={posts} />,
    },
    {
      path: "/gallery/new",
      element: <CreatePost />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <Link to="/">
          <button className="headerBtn"> Home 🏠 </button>
        </Link>
        <Link to="/gallery/new">
          <button className="headerBtn"> Create a Mate 💪 </button>
        </Link>
        <Link to="/gallery">
          <button className="headerBtn"> Gallery 🔍 </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
