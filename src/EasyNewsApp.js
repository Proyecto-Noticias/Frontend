import React from 'react';
import HomeScreen from './screens/HomeScreen';
import NewsDetailView from './screens/NewsDetailView';

function EasyNewsApp() {
  return (
    <div className='App'>
      <div className='main-container'>
        <NewsDetailView />
      </div>
    </div>
  );
}

export default EasyNewsApp;
