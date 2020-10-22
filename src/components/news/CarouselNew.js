import React from 'react';
// import NewsSection from './NewsSection';

const CarouselNew = () => {
  return (
    <section className='carousel__container'>
      <a href='#x'>
        <div className='carousel__content'>
          <img
            src='https://images.unsplash.com/photo-1560625691-4f0b826a4607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=888&q=80'
            alt='Potada de la noticia principal'
            className='carousel__content--img'
            loading='lazy'
          />
        </div>
        <div className='notice__container'>
          <h1 className='notice__container--title'>Title new</h1>
          <p className='notice__container--text'>
            is simply dummy text of the printing and typesetting industry
          </p>
        </div>
      </a>
      {/* <NewsSection /> */}
    </section>
  );
};

export default CarouselNew;
