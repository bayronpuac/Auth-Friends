import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </div>
        <Switch>
          <PrivateRoute path="/friends" component={Friends} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


