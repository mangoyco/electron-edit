import React from 'react';
import Home from './views/Home';
import Edit from './views/Edit/Edit';
//引入一些模块
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </Router > );
}

export default router;