import React, { Component } from 'react';
import LocaleContext from '../LocaleContext';

import PostCard from '../components/PostCard/PostCard';
import Pagination from '../components/Pagination/Pagination';

class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <h1>Blog</h1>
        <div>
          <PostCard />
          <Pagination />
        </div>
      </>
    );
  }
}

export default Home;

