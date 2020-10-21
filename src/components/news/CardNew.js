import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/notphoto.webp';

//Add an aria-role at Link

const CardNew = ({ imageUrl, title, id }) => {
  return (
    <Link className='link-hidden focus-style' to={`new/${id}`}>
      {title}
      <article className='card__container'>
        <img
          src={imageUrl || noImage}
          alt='Portada de la noticia'
          className='card__container--img'
        />
        <div className='card__items'>
          <h2 className='card__items--label'>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default CardNew;
