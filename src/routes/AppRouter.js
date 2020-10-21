import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { LoginScreen } from "../screens/auth/LoginScreen";
import { RegisterScreen } from "../screens/auth/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import NewsDetail from "../components/news/NewsDetail";
import Navbar from "../components/shared/Navbar";
import { Confirmation } from "../components/Confirmation";
import { newsStartLoading } from "../actions/news";
import { useDispatch } from "react-redux";
import { BlogScreen } from "../screens/BlogScreen";

export const AppRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( newsStartLoading() )
  }, [dispatch])

  return (
    <Router>
      <Navbar />
        <div>
          <Switch>
            <Route
              exact
              path='/'
              component={HomeScreen}
            />
            <Route
              exact
              path='/blog'
              component={BlogScreen}
            />
            <Route 
              exact        
              path='/login'
              component={LoginScreen}
            />
            <Route 
              exact        
              path='/register'
              component={RegisterScreen}
            />
            <Route 
              exact        
              path='/confirmation'
              component={Confirmation}
            />
            <Route 
              exact        
              path='/new/:_id'
              component={NewsDetail}
            />
            
          </Switch>
        </div>
      </Router> 
  )
}
