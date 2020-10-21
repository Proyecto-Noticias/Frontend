import React from 'react';

const NewsGrid = ({ children }) => {
  return (
    <section id='news' className='news__container'>
      {children}
    </section>
  );
};

export default NewsGrid;
