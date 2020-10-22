import React from "react";
import { Link } from "react-router-dom";
import bad from "../assets/bad.png";

export const NotFound = () => {
  return (
    <div className="notfound__container">
      <img src={bad} alt="404"></img>
      <h1 className="notfound__text">We don't find what you are looking for</h1>
      <Link to="/">
        <button className="notfound__btn">Go Home</button>
      </Link>
    </div>
  );
};
