import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Post from './Pages/Post';

import LocaleContext from "./LocaleContext";

const postData = [
  {
    title: "O Ricardo é mal educado",
    description: "O porquê da má educação",
    postImg:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    author: "Luis Sousa",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "O Ricardo é malcriado, sim",
    description: "Metin 2",
    postImg:
      "https://images.unsplash.com/photo-1596356811627-71c44557cabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    author: "Paulo Xpto",
    content: "oqwneqjndoqinweqwpindq nidnqiwndiqwn eindqip.",
  },
  {
    title: "Quem é o maior?",
    description: "Sou eu, o Ricardo",
    postImg:
      "https://images.unsplash.com/photo-1596161542619-417102cd517c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    author: "Nvignqe Sousa",
    content: "CONTENT DO POST 3 ODKQPOWMEPQOWMD.",
  },
];

const App = () => {
  return (
    <LocaleContext.Provider value={postData}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Post">Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Post" exact component={Post} />
          <Route path="/Post/:postId" component={Post} />
        </Switch>
      </Router>
    </LocaleContext.Provider>
  );
}

export default App;
