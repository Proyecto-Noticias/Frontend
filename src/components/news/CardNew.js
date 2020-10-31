import React from "react";
import { Link } from "react-router-dom";
import noImage from "../../assets/notphoto.jpg";

const CardNew = ({ imageUrl, title, _id, sentiment }) => {
  return (
    <Link className="focus__article" title={title} to={`/new/${_id}`}>
      <article className="card__container">
        <img
          src={imageUrl || noImage}
          alt="Portada de la noticia"
          loading="lazy"
          className="card__container--img"
        />
        <img
          className="card__container--sentiment"
          src={`../../assets/${sentiment}.png`}
          alt="Sensitive calification"
          loading="lazy"
        />
        <h2 className="card__items--label">{title}</h2>
      </article>
    </Link>
  );
};

export default CardNew;
