import React from 'react';
import Navbar from '../components/shared/Navbar';
import NewsDetail from '../components/news/NewsDetail';
import Comments from '../components/Comments';

function NewsDetailView() {
    return (
        <div>
            <Navbar />
            <NewsDetail />
            <Comments />
        </div>
    )
}

export default NewsDetailView
