import React from 'react';
import { Link } from 'react-router-dom';


const CardNew = ({imageUrl, title, subTitle}) => {
  
  return (
    <Link to='/new'>
      <div className='card__container'>
        <img src={imageUrl} alt='' className='card__container--img' />
        <div className='card__items'>
          <h2 className='card__items--label'>{title}</h2>
          <p className='card__items--text'>{subTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
