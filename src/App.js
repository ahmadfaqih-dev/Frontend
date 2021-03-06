import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';


const App = () => {
  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <User/>
      </Route>
       <Route path="/places/newplace" exact>
        <NewPlace/>
      </Route>
      <Redirect to ="/" />
    </Switch>
  </Router>
    );
};

export default App; 
