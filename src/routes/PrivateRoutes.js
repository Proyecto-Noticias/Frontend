import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        true ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
