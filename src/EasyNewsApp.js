import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';


function EasyNewsApp() {  

  return (  

      <Provider store={store} className='main-container'>        
        <AppRouter />
      </Provider>
    
  );
}

export default EasyNewsApp;
