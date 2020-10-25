import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div>Made with love by MALKOMEDIA</div>
      <Link to="/blog">
        <div>Blog</div>
      </Link>
    </div>
  );
};

export default Footer;
