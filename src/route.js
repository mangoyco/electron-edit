import React from 'react';
import Home from './views/Home';
import Edit from './views/Edit';
//引入一些模块
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function router() {
  return ( <Router>
    <Route path="/" component={Home} />
    <Route path = "/edit"component = {Edit}/>
    </Router > );
}

export default router;