import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* Components */
import PostAbout from './components/PostAbout/PostAbout';
import Comments from "./components/Comments/Comments";
import Post from "./components/Post/Post";

const postData = {
  title: "O Ricardo é mal educado",
  description: "O porquê da má educação",
  postImg:
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  author: "Luis Sousa",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};


const App = () => {
  let {title, description, postImg, author, content} = postData;
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Post
          title={title}
          description={description}
          postImg={postImg}
          author={author}
          content={content}
        />
        <PostAbout author={author} content={content} />
      </div>
      <Comments />
    </div>
  );
}

export default App;
