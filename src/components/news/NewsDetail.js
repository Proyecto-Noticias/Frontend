import React from 'react';
import trashcan from '../../trash-can.svg'

export default function NewsDetail() {
    return (
        <div className="news">
            <div className="news__detail">
                <div className="news__detail--image">
                    <img src="https://images.unsplash.com/photo-1555848965-141f2e58d1a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1548&q=80" alt="News Image" className="news__detail--image" /> 
                </div>
                <div className="news__detail--body">
                    <div className="news__detail--title">
                        <h2>Placeholder title</h2> 
                        <a href="#"><img src={trashcan} alt="Delete" className="deleteNews--icon"/></a>
                    </div>
                    <div className="news__detail--text">
                        <p className="news__detail--category">Politic</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                    </div>
                    <a href="#" className="news__detail--button">
                        <button>
                            Read Complete
                        </button>
                    </a>
                </div>
            </div>
            <a href="#"> Back to News </a>
        </div>
    )
}
