import React from 'react';

const NewsSection = () => {
  return (
    <div className='sections-container'>
      <h1 className='sections-title'>
        Read<span>By</span>
      </h1>
      <nav className='sections-notices'>
        <ul className='section-items l-flex-section'>
          <a href='/'>
            <li className='section-item'>Politic</li>
          </a>
          <a href='/'>
            <li className='section-item'>Sports</li>
          </a>
          <a href='/'>
            <li className='section-item'>Self Care</li>
          </a>
          <a href='/'>
            <li className='section-item'>Economy</li>
          </a>
          <a href='/'>
            <li className='section-item'>Entertaiment</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default NewsSection;
