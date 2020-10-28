import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="confirmation__container">
      <div className="confirmation__deco"></div>
      <div className="confirmation__text">
        <p>Your account has been activated</p>

        <Link className="confirmation__link" to="login">
          Go to login
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
