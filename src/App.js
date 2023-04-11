import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import Teammate from "./pages/Teammate";

const App = () => {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/gallery",
      element: <ReadPosts />,
    },
    {
      path: "/gallery/edit/:id",
      element: <EditPost />,
    },
    {
      path: "/gallery/new",
      element: <CreatePost />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/teammate/:id",
      element: <Teammate />,
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
