import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Home from "../image/BG-home.png";
// import About from "../image/BG-about.png";

const Imagehome = () => {
  const [aboutPage, setAboutPage] = useState(false);
  const [abouthome, setAboutHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === "/") {
      setAboutHome(true);
    }
  }, [location.pathname]);
  return (
    <div>
      {!aboutPage && (
        <div className="Logo">
          <p className="homeSlogan">Chez vous, partout et ailleurs</p>
        </div>
      )}
      {!abouthome && <div className="aboutLogo"></div>}
    </div>
  );
};

export default Imagehome;
