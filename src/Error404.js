import React from "react";
import Link from "@mui/material/Link";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="main-404">
      <h1 className="404-title">404 Error: The pickle jar is not opening!</h1>
      <a href="/">
        <img
          src={require("./assets/images/MortyPickledFront.webp")}
          alt="morty"
          className="morty-pickle"
        ></img>
      </a>
      <p className="text-404">Try to break the jar by clicking on it.</p>
    </div>
  );
};

export default Error404;
