import React from 'react';
import NewsDetail from './components/news/NewsDetail';
import Navbar from './components/shared/Navbar';
import { AppRouter } from './routes/AppRouter';

import HomeScreen from './screens/HomeScreen';

function EasyNewsApp() {
  return (
    <div className='App'>
      <div className='main-container'>
        
        <AppRouter />
      </div>
    </div>
  );
}

export default EasyNewsApp;
