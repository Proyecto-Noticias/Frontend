import React from 'react';
import NewsSection from './NewsSection';

const MainNew = () => {

  return (
    <main className='principal-container'>
      <div  className='image-container'>
        <img
          src='https://images.unsplash.com/photo-1560625691-4f0b826a4607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=888&q=80'
          alt='principal-notice'
          className='notice-img'
        />
      </div>
      <div className='notice-container'>
        <h1 className='principal-title'>Title new</h1>
        <p className='principal-text'>
          is simply dummy text of the printing and typesetting industry
        </p>
      </div>
      <NewsSection />
    </main>
  );
};

export default MainNew;
