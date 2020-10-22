import React from 'react';
import CommentItem from './CommentItem';

export default function Comments() {
  return (
    <section className='comments__box'>
      <h2>Comments</h2>
      <div className='comments__box--detail'>
        <CommentItem />
      </div>
    </section>
  );
}
