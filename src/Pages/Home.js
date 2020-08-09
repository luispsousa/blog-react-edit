import React, { Component } from 'react';
import LocaleContext from '../LocaleContext';

import PostCard from '../components/PostCard/PostCard';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const postContainer = {
      display: 'flex',
      justifyContent: 'space-around'
    };
    return (
      <>
        <h1>Listagem dos posts</h1>
        <div style={postContainer}>
          <LocaleContext.Consumer>
              {(data) => {
                return data.posts.map((post, i) =>{
                  return <PostCard key={i} post={post} />;
                })
              }}
          </LocaleContext.Consumer>
        </div>
      </>    
    );
  }
}

export default Home;

