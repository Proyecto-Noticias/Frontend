import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import trashcan from '../../assets/trash-can.svg';
import { getNewsById } from '../../selector/getNewById';

export default function NewsDetail() {
  const { isAdmin } = useSelector((state) => state.auth);

  const { _id } = useParams();

  const currentNew = getNewsById(_id);

  const { imageUrl, title, body, category, journal } = currentNew;

  return (
    <div className='news'>
      <div className='news__detail'>
        <div className='news__detail--image'>
          <img src={imageUrl} alt={title} className='news__detail--image' />
        </div>
        <div className='news__detail--body'>
          <div className='news__detail--title'>
            <h2>{title}</h2>
            {isAdmin && (
              <button
                className='deleteNews--button focus-style--button'
                type='button'
                title='Eliminar noticia'
              >
                <img
                  src={trashcan}
                  alt='Eliminar noticia'
                  className='deleteNews--icon'
                />
              </button>
            )}
          </div>
          <div className='news__detail--text'>
            <p className='news__detail--category'>{category}</p>
            <p>{body}</p>
          </div>
          <a
            href={journal}
            title='Read complete'
            target='_blank'
            className='news__detail--button'
          >
            <button>Read Complete</button>
          </a>
        </div>
      </div>
      <Link to='/' title='Regresar a las noticias' className='focus-style'>
        {' '}
        Back to News{' '}
      </Link>
    </div>
  );
}
