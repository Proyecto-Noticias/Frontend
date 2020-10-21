import React from 'react';

const NewsSection = () => {
  return (
    <section id='categories' className='sections__container'>
      <h1 className='sections__container--title'>
        Read<span>By</span>
      </h1>
      <div className='sections__container--items l-flex-wrap'>
        <nav>
          <ul className='sections__list'>
            <li>
              <a
                title='Noticias de politica'
                className='sections__list--item'
                href='#x'
              >
                Politic
              </a>
            </li>
            <li>
              <a
                title='Noticias de deportes'
                className='sections__list--item'
                href='#x'
              >
                Sports
              </a>
            </li>
            <li>
              <a
                title='Noticias de self care'
                className='sections__list--item'
                href='#x'
              >
                Self Care
              </a>
            </li>
            <li>
              <a
                title='Noticias de economía'
                className='sections__list--item'
                href='#x'
              >
                Economy
              </a>
            </li>
            <li>
              <a
                title='Noticias de entretenimiento'
                className='sections__list--item'
                href='#x'
              >
                Entertaiment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NewsSection;
