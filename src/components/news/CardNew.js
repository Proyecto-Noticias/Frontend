import React from 'react';
import { Link } from 'react-router-dom';

//Add an aria-role at Link

const CardNew = ({ imageUrl, title, subTitle }) => {
  return (
    <Link className='link-hidden focus-style' to='/new'>
      {title}
      <article className='card__container'>
        <img
          src={imageUrl}
          alt='Portada de la noticia'
          className='card__container--img'
        />
        <div className='card__items'>
          <h2 className='card__items--label'>{title}</h2>
          <p className='card__items--text'>{subTitle}</p>
        </div>
      </article>
    </Link>
  );
};

export default CardNew;
