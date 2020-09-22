import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [userState, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once the app component loads
    auth.onAuthStateChanged(authUser => {
      // console.log('The user us ', authUser);

      if (authUser) {
        // The user is logged in
        if (authUser.email !== userState.user?.email) {
          dispatch({
            type: 'SET_USER',
            user: authUser
          });
        }
      } else if (userState.user) {
        // No user is logged in
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
