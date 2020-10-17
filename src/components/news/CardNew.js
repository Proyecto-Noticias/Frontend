import React from 'react';

const CardNew = () => {
  return (
    <div className='cards-container'>
      <img
        src='https://images.unsplash.com/photo-1577640837437-6da1ca585dcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        alt=''
        className='card-img'
      />
      <div className='card-items'>
        <h2 className='card-label'>Title New</h2>
        <p className='card-text'>
          is simply dummy text of the printing and typesetting industry
        </p>
      </div>
    </div>
  );
};

export default CardNew;
