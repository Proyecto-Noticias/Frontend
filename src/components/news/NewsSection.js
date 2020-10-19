import React from 'react';

const NewsSection = () => {
  return (
    <div className='sections__container'>
      <h1 className='sections__container--title'>
        Read<span>By</span>
      </h1>
      <div className='sections__container--items l-flex-wrap'>
        <p className='sections__item'>Politic</p>
        <p className='sections__item'>Sports</p>
        <p className='sections__item'>Self Care</p>
        <p className='sections__item'>Economy</p>
        <p className='sections__item'>Entertaiment</p>
      </div>
    </div>
  );
};

export default NewsSection;
