import React from 'react';
import { Link } from 'react-router-dom';
import  noImage  from '../../assets/notphoto.webp' 


const CardNew = ({imageUrl, title, subTitle, id}) => {
  
  return (
    <Link to={`new/${id}`}>
      <div className='card__container'>
        <img src={imageUrl || noImage} alt='' className='card__container--img' />
        
        <div className='card__items'>
          <h2 className='card__items--label'>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CardNew;
