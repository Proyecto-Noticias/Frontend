import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import Blog from '../assets/spiderweb.jpg';
import archi from '../assets/architecture-compress.jpg';
import hapyface from '../assets/positive.png';
import sadface from '../assets/negative.png';
import neutralface from '../assets/neutral.png';

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
      <section
        ref={(el) => {
          blogWithAnimation = el;
        }}
        className='blog__container'
      >
        <h1 className='blog__container--title'>
          We use web scraping to find relevant news for you.
        </h1>
        <img className='blog__container--image' src={Blog} alt='spiderweb' />
        <p className='blog__container--description'>
          Our technologies are similar to what Google uses for its search
          engine.
        </p>
        <p className='blog__container--text'>
          We take several starting URLs (journal's webpages), and our system
          finds the links to relevant news, this creates a link network which
          you can imagine it like a spiderweb. Once the system finds a news
          article, it extracts the information and saves it in our databases.
        </p>
        <p className='blog__container--text'>
          We search for new articles several times in the day so you can have
          the most updated news at your hand.
        </p>
        <h1 className='blog__container--title'>Sentiment Analysis</h1>
        <p className='blog__container--text'>
          While the article is being saved, we execute a Artificial Intelligent
          algorithm on it to calculate its sentiment so you can select the news
          according to your state of humor.
        </p>
        <p className='blog__container--text'>
          You can see the sentiment classification in each news card:
        </p>
        <ul className='blog__li'>
          <li className='blog__li--container'>
            <img
              className='blog__container--face'
              src={hapyface}
              alt='hapyface'
            />
            Positive news
          </li>
          <li className='blog__li--container'>
            <img
              className='blog__container--face'
              src={neutralface}
              alt='hapyface'
            />
            Neutral news
          </li>
          <li className='blog__li--container'>
            <img
              className='blog__container--face'
              src={sadface}
              alt='hapyface'
            />
            Sad news
          </li>
        </ul>

        <h1 className='blog__container--title'>Our Technology</h1>
        <p className='blog__container--text'>
          Our approach to developing our application is the microservices, so
          the DataScience and Artificial Intelligence code is separated from the
          Backend, this allows us to fix errors in the extracting code with the
          site 100% life.
        </p>
        <p className='blog__container--text'>
          Therefore, the communication is made using an independent REST API for
          DataScience, which interacts with the Backend API.
        </p>
        <p className='blog__container--text'>
          It's very important to mention that the Scrapy web scraper is being
          executed in an independent internal service, this is perfect to work
          or fix errors on it without stopping the main DataScience API
        </p>
        <p className='blog__container--text'>
          Also, we use several open source technologies.
        </p>
        <img className='blog__container--image' src={archi} alt='Database' />
      </section>
    </>
  );
};

export default BlogScreen;
