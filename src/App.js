import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Pages/Home';
import Post from './Pages/Post';
import Page404 from './Pages/Page404';

import LocaleContext from "./LocaleContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      currentPage: 1,
      postsPerPage: 10,
      currentPosts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const postsPage = result.slice(indexOfFirstPost, indexOfLastPost);
        this.setState({
          isLoaded: true,
          posts: result,
          currentPosts: postsPage
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        });
      });
  }

  render() {    
    return (
      <LocaleContext.Provider value={this.state}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/posts/:postId" component={Post} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </LocaleContext.Provider>
    );
  }
}

export default App;
