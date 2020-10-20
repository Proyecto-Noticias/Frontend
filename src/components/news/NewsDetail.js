import React  from 'react';
import { Link, useParams } from 'react-router-dom';
import trashcan from '../../assets/trash-can.svg';
import { getNewsById } from '../../selector/getNewById';



export default function NewsDetail() {

	const { id } = useParams();

	const currentNew = getNewsById(id)

	const {
		imageUrl,
		title,
		body,
		category,
		journal
	} = currentNew

	return (
		<div className="news">
			<div className="news__detail">
				<div className="news__detail--image">
					<img src={imageUrl} alt={title} className="news__detail--image" /> 
				</div>
				<div className="news__detail--body">
					<div className="news__detail--title">
						<h2>{title}</h2> 
						<a href="#"><img src={trashcan} alt="Delete" className="deleteNews--icon" /></a>
					</div>
					<div className="news__detail--text">
						<p className="news__detail--category">{category}</p>
						<p>{body}</p> 
					</div>
					<a href={journal} target='_blank' className="news__detail--button">
						<button>
							Read Complete
          </button>
					</a>
				</div>
			</div>
			<Link to="/"> Back to News </Link>			
		</div>
	)
}
