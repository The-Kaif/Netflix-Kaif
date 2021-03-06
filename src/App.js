import React, { useEffect } from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Movie from './screens/movie';

//import movie from './screens/movie';

//import Footer from './components/Footer';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  <Helmet>
    <meta charSet="utf-8" />
    <title>Neoflix</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="Helmet application" />
  </Helmet>

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <><div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/movie">
              <Movie />
            </Route>
          </Switch>
        )}
      </Router>

    </div>
    </>
  );


  
}

export default App;
