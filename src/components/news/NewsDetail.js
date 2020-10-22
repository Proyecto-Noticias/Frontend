import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { newStartDetailLoading } from '../../actions/news';
//import trashcan from '../../assets/trash-can.svg';


export default function NewsDetail() {

  const dispatch = useDispatch()

  const { _id } = useParams();

  useEffect(() => {
    dispatch( newStartDetailLoading(_id) )
  }, [dispatch])

  //const { isAdmin } = useSelector((state) => state.auth);
  const  newSelected  = useSelector((state) => state.news);
  console.log(newSelected)
  //const { imageUrl, title, body, category, journal } = newSelected;
  
  return (
    <div className='news'>
      {newSelected.title}
      {/* <div className='news__detail'>
        <div className='news__detail--image'>
          <img
            loading='lazy'
            src={imageUrl}
            alt={title}
            className='news__detail--image'
          />
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
                  loading='lazy'
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
            rel='noreferrer'
            className='news__detail--button'
          >
            <button>Read Complete</button>
          </a>
        </div>
      </div> */}
      <Link to='/' title='Regresar a las noticias' className='focus-style'>
        Back to News
      </Link>
    </div>
  );
}
