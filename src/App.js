import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Blog from './Pages/Blog';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/" component={Blog}></Route>
    </Router>
  );
}

export default App;
