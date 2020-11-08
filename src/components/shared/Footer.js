import React from "react";
import { Link } from "react-router-dom";
import InstallPWA from "../installPWA";

const Footer = () => {
  return (
    <div className="footer__container">
      {/* <a
        href="https://github.com/Proyecto-Noticias"
        target="_blank"
        rel="noreferrer">
        Team MILKOMEDA
      </a> */}
      <InstallPWA />
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Footer;
