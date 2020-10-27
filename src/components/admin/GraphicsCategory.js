import React from 'react';
import StatNewsSimpleBarChart from '../statsNews/StatNewsSimpleBarChart';

const GraphicsCategory = ({ categories }) => {
  return (
    <div className='admin__container'>
      <h1>Categories Visited</h1>
      <div>
        <StatNewsSimpleBarChart data={categories} />
      </div>
    </div>
  );
};

export default GraphicsCategory;
