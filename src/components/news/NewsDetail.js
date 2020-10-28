import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { eventStartDeleted, newStartDetailLoading } from "../../actions/news";
import { statsCategoryConsumed } from "../../actions/stats";
import trashcan from "../../assets/trash-can.svg";
import Loading from "../shared/Loading";
import noImage from "../../assets/notphoto.jpg";
import arroyback from "../../assets/flecha.png";

export default function NewsDetail() {
  const dispatch = useDispatch();
  const dispatchAddCategory = useDispatch();
  const history = useHistory();

  const { _id } = useParams();

  useEffect(() => {
    dispatch(newStartDetailLoading(_id));
  }, [dispatch, _id]);

  const handleDeleteNew = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eventStartDeleted(_id));
        history.replace("/");
      }
    });
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

  useEffect(() => {
    dispatchAddCategory(statsCategoryConsumed(category));
  }, [dispatchAddCategory, category]);

  function Share(e) {
    console.log("apretado");
    e.preventDefault();
    if (!navigator.share) {
      alert("Tu browser no soporta la Web Share API");
      return;
    }

    // const { category } = this.state;

    navigator
      .share({
        title: `${title}`,
        text: `${title}`,
        url: "https://www.leonsonidovirtual.com",
      })
      .then(() => {
        alert("Shared");
      })
      .catch(() => {
        alert("No se pudo compartir");
      });
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="news__section--container">
        <Link to="/" title="Back to News" className="news__detail--backnews">
          <img className="news__detail--arroy" src={arroyback} alt="back" />
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
                  className="news__delete--button focus-style--button"
                  type="button"
                  title="Delete New"
                  onClick={handleDeleteNew}>
                  <img
                    loading="lazy"
                    src={trashcan}
                    alt="Delete New"
                    className="news__delete--icon"
                  />
                </button>
              )}
            </div>
            <div className="news__detail--text">
              <Link to={`/category/${category}`}>
                <p className="news__detail--category">#{category}</p>
              </Link>
              <p>{subTitle}</p>
            </div>
            <a
              href={articleUrl}
              title="Read complete"
              target="_blank"
              rel="noreferrer"
              className="news__detail--button">
              <button>Read Complete</button>
            </a>
            <a onClick={Share}>Compartir</a>
          </div>
        </div>
      </div>
    </>
  );
}
