import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/notphoto.webp';

//Add an aria-role at Link
// focus - style;
const CardNew = ({ imageUrl, title, _id }) => {
  return (
    <Link className='focus-article' title={title} to={`/new/${_id}`}>
      <article className={'card__container'}>
        <img
          src={imageUrl || noImage}
          alt='Portada de la noticia'
          className='card__container--img'
          loading='lazy'
        />
        <div className='card__items'>
          <h2 className='card__items--label'>{title}</h2>
        </div>
      </article>
    </Link>
  );
};

export default CardNew;
