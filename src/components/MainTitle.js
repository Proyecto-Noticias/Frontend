import React from "react";
import { Link } from "react-router-dom";

const MainTitle = () => {
  return (
    <>
      <div className="main__container-login">
        <h1 className="main__title">News with automated web extraction</h1>
        <p className="main__title-description">
          We use Artificial Intelligence to classify the news according to its
          positivism or negativity
        </p>
        <Link to="/blog">
          <button aria-label="Learn more" className="main__btn" type="button">
            Learn more
          </button>
        </Link>
      </div>
    </>
  );
};

export default MainTitle;
