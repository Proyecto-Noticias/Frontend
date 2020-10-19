import React from 'react';
import { Link } from 'react-router-dom';

const CardNew = ({imageUrl, title, body}) => {
  return (
    <Link to='/new/:id?'>
      <div className='cards-container'>
        <img
          src={imageUrl}
          alt={title}
          className='card-img'
        />
        <div className='card-items'>
          <h2 className='card-label'>{title}</h2>
          <p className='card-text'>
            {body}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
