import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { searchNewsLoading } from '../../actions/news';

const NewsSection = () => {

  const dispatch = useDispatch()
  const { name } = useSelector((state) => state.auth);
  const isActive = useParams();

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }
  
  useEffect(() => {
    dispatch ( searchNewsLoading(searchText) )
  }, [dispatch, searchText])
  
  
  return (
    <div>
      <section id='categories' className='newsection__container'>
        <div className='newsection__container-text'>
          <h1 className='newsection__title-user'>¡Hello {name}!</h1>
          <label className='newsection__label'>
            <input
              id='search'
              required
              title='Search news'
              type='text'
              name='searchText'
              value={searchText}
              placeholder='Search news'
              className='newsection__input'
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='sections__main'>
          {/* <h1 className="sections__container--title">
            Read<span>By</span>
          </h1> */}
          <div className='sections__container--items '>
            <nav>
              <ul className='sections__list'>
                <li>
                  <Link
                    title='Noticias de politica'
                    className='sections__list--item'
                    to={isActive.category === 'politics' ? '#' : '/politics'}
                  >
                    Politic
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de deportes'
                    className='sections__list--item'
                    to={isActive.category === 'sports' ? '#' : '/sports'}
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de self care'
                    className='sections__list--item'
                    to={
                      isActive.category === 'health-lifestyle'
                        ? '#'
                        : '/health-lifestyle'
                    }
                  >
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de economía'
                    className='sections__list--item'
                    to={isActive.category === 'economy' ? '#' : '/economy'}
                  >
                    Economy
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de entretenimiento'
                    className='sections__list--item'
                    to={
                      isActive.category === 'entertainment'
                        ? '#'
                        : '/entertainment'
                    }
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de entretenimiento'
                    className='sections__list--item'
                    to={isActive.category === 'culture' ? '#' : '/culture'}
                  >
                    Culture
                  </Link>
                </li>
                <li>
                  <Link
                    title='Noticias de entretenimiento'
                    className='sections__list--item'
                    to={
                      isActive.category === 'technology' ? '#' : '/technology'
                    }
                  >
                    Tech
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
