import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="back">
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;
