import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { eventStartDeleted, newStartDetailLoading } from "../../actions/news";
import trashcan from "../../assets/trash-can.svg";


export default function NewsDetail() {
  const dispatch = useDispatch();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(newStartDetailLoading(_id));
  }, [dispatch, _id]);

  const handleDeleteNew = () => {
    dispatch( eventStartDeleted(_id))
  }

  const { newSelected } = useSelector((state) => state.news);
  const { loading } = newSelected;
  const { isAdmin } = useSelector((state) => state.auth);
  const { imageUrl, title, subTitle, category, articleUrl, sentiment } = newSelected;

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div className="news">
      <Link to="/" title="Back to News" className="backnews">
        Back to News
      </Link>
      <div className="news__detail">
        <div className="news__detail--image">
          <img loading="lazy"
          src={imageUrl ||  '../assets/notphoto.webp'} 
            
          alt={title} className="foto" />
          <img className="carita" src={`../assets/${sentiment}.png`} alt="Sensitive calification" />
        </div>
        <div className="news__detail--body">
          <div className="news__detail--title">
            <h2>{title}</h2>
            {isAdmin && (
              <button
                className="deleteNews--button focus-style--button"
                type="button"
                title="Eliminar noticia"
                onClick={handleDeleteNew}
                >
                <img
                  loading="lazy"
                  src={trashcan}
                  alt="Eliminar noticia"
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
  );
}
