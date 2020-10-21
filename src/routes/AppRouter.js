import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsDetail from '../components/news/NewsDetail';
import Navbar from '../components/shared/Navbar';
import { Confirmation } from '../components/Confirmation';
import { newsStartLoading } from '../actions/news';
import { useDispatch, useSelector } from 'react-redux';
import { BlogScreen } from '../screens/BlogScreen';
import { PublicRoute } from './PublicRoutes';
import { PrivateRoute } from './PrivateRoutes';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(newsStartLoading());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <main id='main'>
        <Switch>
          <PublicRoute
            exact
            isAuth={!!uid}
            path='/blog'
            component={BlogScreen}
          />
          <PublicRoute
            exact
            isAuth={!!uid}
            path='/login'
            component={LoginScreen}
          />
          <PublicRoute
            exact
            isAuth={!!uid}
            path='/register'
            component={RegisterScreen}
          />
          <PublicRoute
            exact
            isAuth={!!uid}
            path='/confirmation'
            component={Confirmation}
          />
          <PrivateRoute exact isAuth={!!uid} path='/' component={HomeScreen} />
          <PrivateRoute
            exact
            isAuth={!!uid}
            path='/new/:_id'
            component={NewsDetail}
          />
        </Switch>
      </main>
    </Router>
  );
};
