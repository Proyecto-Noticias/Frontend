import React from 'react';
import { Link } from 'react-router-dom';

//Add an aria-role at Link

const CardNew = ({ imageUrl, title, subTitle }) => {
  return (
    <Link className='link-hidden' to='/new'>
      {title}
      <article className='card__container'>
        <img
          tabIndex='0'
          src={imageUrl}
          alt='Portada de la noticia'
          className='card__container--img'
        />
        <div className='card__items'>
          <h2 tabIndex='0' className='card__items--label'>
            {title}
          </h2>
          <p tabIndex='0' className='card__items--text'>
            {subTitle}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CardNew;
