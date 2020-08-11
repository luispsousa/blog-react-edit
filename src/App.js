import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

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
      items: [],
    };

    this.addComment = (comment, postId) => {
      this.state.posts.map((post) => {
        if (post.postId == postId) {
          const newComments = { ...this.state.posts };
          newComments[postId - 1].comments.push(comment);
          this.setState({ newComments });
        }
      });
    };

    this.removeComment = (index, postId) => {
      this.state.posts.map((post) => {
        if (post.postId == postId) {
          const newComments = { ...this.state.posts };
          newComments[postId - 1].comments.splice(index, 1);
          this.setState({ newComments });
        }
      });
    };

    this.state = {
      posts: [
        {
          postId: 1,
          title: "O Ricardo é mal educado",
          description: "O porquê da má educação",
          postImg:
            "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          author: "Luis Sousa",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          comments: [
            "Já estive com o Ricardo e ele é de facto malcriado.",
            "O rapaz é um morcão",
            "Post 1",
          ],
        },
        {
          postId: 2,
          title: "O Ricardo é malcriado, sim",
          description: "Metin 2",
          postImg:
            "https://images.unsplash.com/photo-1596356811627-71c44557cabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          author: "Paulo Xpto",
          content: "oqwneqjndoqinweqwpindq nidnqiwndiqwn eindqip.",
          comments: [
            "Já estive com o Ricardo e ele é de facto malcriado.",
            "O rapaz é um morcão",
            "Post 2",
          ],
        },
        {
          postId: 3,
          title: "Quem é o maior?",
          description: "Sou eu, o Ricardo",
          postImg:
            "https://images.unsplash.com/photo-1596161542619-417102cd517c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          author: "Nvignqe Sousa",
          content: "CONTENT DO POST 3 ODKQPOWMEPQOWMD.",
          comments: [
            "Já estive com o Ricardo e ele é de facto malcriado.",
            "O rapaz é um morcão",
            "Post 3",
          ],
        },
      ],
      addComment: this.addComment,
      removeComment: this.removeComment,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result
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
