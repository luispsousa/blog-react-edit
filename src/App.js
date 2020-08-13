import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from './Pages/Home';
import Post from './Pages/Post';
import Page404 from './Pages/Page404';

import Store from './Services/Store';

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
    const fetchPosts = async () => {
      this.setState({isLoaded: true});
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({posts: res.data});
      this.setState({ isLoaded: false });
    }

    fetchPosts();
  }

  render() {    
    return (
      <Store>
        <Router>
          <nav className="container mt-5">
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
      </Store>
    );
  }
}

export default App;
