import React from "react";
import { NavLink } from "react-router-dom";
import weblogo from "../image/LOGO.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="webSiteLogo">
        <img src={weblogo} alt="web site logo kasa" />
      </div>
      <div className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Acceuil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
