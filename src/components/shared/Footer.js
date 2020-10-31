import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <a
        href="https://github.com/Proyecto-Noticias"
        target="_blank"
        rel="noreferrer">
        Team MILKOMEDA
      </a>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Footer;
