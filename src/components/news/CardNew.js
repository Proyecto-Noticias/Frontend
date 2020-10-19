import React from 'react';
import { Link } from 'react-router-dom';


const CardNew = () => {
  const img =
    'https://images.unsplash.com/photo-1577640837437-6da1ca585dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
  return (
    <Link to='/new'>
      <div className='card__container'>
        <img src={img} alt='' className='card__container--img' />
        <div className='card__items'>
          <h2 className='card__items--label'>Title New</h2>
          <p className='card__items--text'>
            is simply dummy text of the printing and typesetting industry

          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
