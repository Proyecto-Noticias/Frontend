import React from 'react';

const CarouselNew = (props) => {
  const { children } = props;
  return (
    <section className='notices-container l-grid-4'>
      <a href='/'>{children}</a>
    </section>
  );
};

export default CarouselNew;
