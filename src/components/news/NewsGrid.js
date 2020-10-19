import React from 'react';

const NewsGrid = (props) => {
  const { children } = props;
  return <section className='news__container'>{children}</section>;
};

export default NewsGrid;
