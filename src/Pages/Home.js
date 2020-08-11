import React, { Component } from 'react';
import LocaleContext from '../LocaleContext';

import PostCard from '../components/PostCard/PostCard';
import {Pagination} from '../components/Pagination/Pagination';

class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container mt-5">
        <h1>Blog</h1>
        <PostCard />
        <LocaleContext.Consumer>
          {(data) => {
            return (
              <Pagination
                postsPerPage={data.postsPerPage}
                totalPosts={data.posts.length}
                paginate={handlePagination}
              />
            );
          }}
        </LocaleContext.Consumer>
      </div>
    );
  }
}

export default Home;

