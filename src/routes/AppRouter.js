import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Loading from '../components/shared/Loading';
import { newsStartLoading } from '../actions/news';
import statsCategoryLoaded from '../actions/stats';
import adminUsersLoaded from '../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from './PublicRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { NotFound } from '../components/NotFound';
import { NewsPerCategory } from '../screens/NewsPerCategory';

const MainLogin = lazy(() => import('../screens/MainLogin'));
const MainRegister = lazy(() => import('../screens/MainRegister'));
const Navbar = lazy(() => import('../components/shared/Navbar'));
const HomeScreen = lazy(() => import('../screens/HomeScreen'));
const NewsDetail = lazy(() => import('../components/news/NewsDetail'));
const BlogScreen = lazy(() => import('../screens/BlogScreen'));
const AdminScreen = lazy(() => import('../screens/admin/AdminScreen'));
const Confirmation = lazy(() => import('../components/Confirmation'));

const AppRouter = () => {
  const dispatch = useDispatch();
  const dispatchStats = useDispatch();
  const dispatchUsers = useDispatch();

  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(newsStartLoading());
  }, [dispatch]);

  useEffect(() => {
    dispatch(statsCategoryLoaded());
  }, [dispatch, dispatchStats]);

  useEffect(() => {
    dispatch(adminUsersLoaded());
  }, [dispatch, dispatchUsers]);

  return (
    <Suspense fallback={<Loading />}>
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
              component={MainLogin}
            />
            <PublicRoute
              exact
              isAuth={!!uid}
              path='/register'
              component={MainRegister}
            />
            <PublicRoute
              exact
              isAuth={!!uid}
              path='/confirmation'
              component={Confirmation}
            />
            <PrivateRoute
              exact
              isAuth={!!uid}
              path='/'
              component={HomeScreen}
            />
            <PrivateRoute
              exact
              isAuth={!!uid}
              path='/new/:_id'
              component={NewsDetail}
            />
            <PrivateRoute
              exact
              isAuth={!!uid}
              path='/category/:category'
              component={NewsPerCategory}
            />
            <PrivateRoute
              exact
              isAuth={!!uid}
              path='/stats'
              component={AdminScreen}
            />
            <PublicRoute isAuth={!!uid} path='*' component={NotFound} />
          </Switch>
        </main>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
