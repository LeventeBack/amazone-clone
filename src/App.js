import React, { useEffect } from 'react';
import Header from './Header.js'
import './App.css';
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import { auth } from './firebase'
import { useStateValue } from './StateProvider.js';

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
