import React from "react";
import Logo from "../image/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" />
      <div className="footerText">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
