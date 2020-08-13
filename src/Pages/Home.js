import React, { useContext } from 'react'

import { Context } from '../Services/Store';

import PostCard from '../components/PostCard/PostCard';

const Home = () => {
  const [state, setState] = useContext(Context);
  return (
    <div className="container mt-5">
      <h1>Blog</h1>
      <PostCard />
      {/* <LocaleContext.Consumer>
          {(data) => {
            return (
              <Pagination
                postsPerPage={data.postsPerPage}
                totalPosts={data.posts.length}
                paginate={handlePagination}
              />
            );
          }}
        </LocaleContext.Consumer> */}
    </div>
  );
}

export default Home

