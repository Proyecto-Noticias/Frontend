import React from 'react';
import { Link } from 'react-router-dom';
import bad from '../assets/negative.png';

export default function NotFound() {
  return (
    <div className='notfound__container'>
      <img src={bad} loading='lazy' alt='error 404'></img>
      <h1 className='notfound__text'>We don't find what you are looking for</h1>
      <Link to='/'>
        <button className='notfound__btn'>Go Home</button>
      </Link>
    </div>
  );
}
