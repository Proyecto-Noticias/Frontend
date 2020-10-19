import React from 'react';
import trashcan from '../../trash-can.svg'
import backtonews from '../../backtonews.svg'

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
                        <h4>Politic</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                    </div>
                    <a href="#" className="news__detail--button">Read Complete</a>
                </div>
            </div>
            <a href="#"><img src={backtonews} alt="Back to News button" className="temporarylink"/></a>
        </div>
    )
}
