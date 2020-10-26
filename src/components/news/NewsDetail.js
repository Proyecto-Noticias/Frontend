import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { eventStartDeleted, newStartDetailLoading } from "../../actions/news";
import trashcan from "../../assets/trash-can.svg";
import Loading from "../shared/Loading";
import noImage from "../../assets/notphoto.png";

export default function NewsDetail() {
  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(newStartDetailLoading(_id));
  }, [dispatch, _id]);

  const handleDeleteNew = () => {
    dispatch(eventStartDeleted(_id));
  };

  const { newSelected } = useSelector((state) => state.news);
  const { loading } = newSelected;
  const { isAdmin } = useSelector((state) => state.auth);
  const {
    imageUrl,
    title,
    subTitle,
    category,
    articleUrl,
    sentiment,
  } = newSelected;

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="news">
        <Link to="/" title="Back to News" className="backnews">
          Back to News
        </Link>
        <div className="news__detail">
          <div className="news__detail--image">
            <img
              loading="lazy"
              src={imageUrl || noImage}
              alt={title}
              className="news__detail--img"
            />
            <img
              className="news__detail--sentiment"
              src={`../assets/${sentiment}.png`}
              alt="Sensitive calification"
              loading="lazy"
            />
          </div>
          <div className="news__detail--body">
            <div className="news__detail--title">
              <h2>{title}</h2>
              {isAdmin && (
                <button
                  className="deleteNews--button focus-style--button"
                  type="button"
                  title="Delete New"
                  onClick={handleDeleteNew}>
                  <img
                    loading="lazy"
                    src={trashcan}
                    alt="Delete New"
                    className="deleteNews--icon"
                  />
                </button>
              )}
            </div>
            <div className="news__detail--text">
              <Link to={`/${category}`}>
                <p className="news__detail--category">#{category}</p>
              </Link>
              <p>{subTitle}</p>
            </div>
            <a
              href={articleUrl}
              title="Read complete"
              rel="noopener"
              className="news__detail--button">
              <button>Read Complete</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
