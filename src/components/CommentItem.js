import React from 'react'
import trashcan from '../trash-can.svg';

export default function CommentItem() {
    return (
        <div className="commentItem">
            <div className="commentItem__username">
                <h3>Username</h3>
                <img src={trashcan} alt=""/>
            </div>
            <div className="commentItem__body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    )
}
