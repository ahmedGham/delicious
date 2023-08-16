import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHrefListener } from "../customHooks/useHrefListener";
const Navbar = () => {
  const {setCurrentHref} = useHrefListener();
  
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="/" className="link" onClick={() => setCurrentHref("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/subscribe"
              className="link"
              onClick={() => setCurrentHref("/subscribe")}
            >
              Subscribe
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              className="link"
              onClick={() => setCurrentHref("/recipes")}
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              to="/addRecipe"
              className="link"
              onClick={() => setCurrentHref("/addRecipe")}
            >
              Add Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="link"
              onClick={() => setCurrentHref("/about")}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
