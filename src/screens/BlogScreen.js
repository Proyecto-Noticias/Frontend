import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import Blog from '../assets/spiderweb.jpg';

const BlogScreen = () => {
  let blogWithAnimation = useRef(null);
  useEffect(() => {
    TweenMax.to(blogWithAnimation, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          blogWithAnimation = el;
        }}
        className='blog__container'
      >
        <h1 className='blog__container-title'>
          We use web scraping to find relevant news for you.
        </h1>
        <img className='blog__container-image' src={Blog} alt='spiderweb' />
        <p className='blog__container-description'>
          Our technologies are similar to what Google uses for its search
          engine.
        </p>
        <p className='blog__container-text'>
          We take several starting URLs (journal's webpages), and our system
          finds the links to relevant news, this creates a link network which
          you can imagine it like a spiderweb. Once the system finds a news
          article, it extracts the information and saves it in our databases.
        </p>
        <p className='blog__container-text'>
          While the article is being saved, we execute a machine learning
          algorithm on it to calculate its positivism or negativism so you can
          select the news according to your state of humor.
        </p>
        <p className='blog__container-text'>
          Our Machine Learning team uses the following open source technologies:
        </p>
        <ul className='blog__li'>
          <li>
            Scrapy <a href='https://scrapy.org/'>https://scrapy.org/</a>
          </li>
          <li>
            FastAPI{'  '}
            <a href='https://fastapi.tiangolo.com/'>
              https://fastapi.tiangolo.com/
            </a>
          </li>
          <li>
            MySQL <a href='https://www.mysql.com/'>https://www.mysql.com/</a>
          </li>
          <li>
            TensorFlow{' '}
            <a href='https://www.tensorflow.org/'>
              https://www.tensorflow.org/
            </a>
          </li>
          <li>
            Keras <a href='https://keras.io/'>https://keras.io/</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogScreen;
