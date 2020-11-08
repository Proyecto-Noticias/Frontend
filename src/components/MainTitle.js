import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-router-dom";
import InstallPWA from "../components/installPWA";

const MainTitle = () => {
  let titleWithAnimation = useRef(null);
  useEffect(() => {
    TweenMax.to(titleWithAnimation, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          titleWithAnimation = el;
        }}
        className="main__container--login">
        <h1 className="main__container--title">
          News with automated web extraction
        </h1>
        <p className="main__container--title-description">
          We use Artificial Intelligence to classify the news according to its
          positivism or negativity
        </p>
        <Link aria-label="Learn more" to="/blog">
          <button tabIndex="-1" className="main__container--btn" type="button">
            Learn more
          </button>
        </Link>
        <InstallPWA />
      </div>
    </>
  );
};

export default MainTitle;
