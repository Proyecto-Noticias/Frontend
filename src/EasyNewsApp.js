import React from 'react';
import NewsDetail from './components/news/NewsDetail';
import Navbar from './components/shared/Navbar';

import HomeScreen from './screens/HomeScreen';

function EasyNewsApp() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Navbar />
        <NewsDetail />
      </div>
    </div>
  );
}

export default EasyNewsApp;
