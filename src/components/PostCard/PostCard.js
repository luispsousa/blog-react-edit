import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = () => {
  
  return (
    <LocaleContext.Consumer>
      {(data) => {
        {/* console.log(data); */}
        if (data.loading) {
          return <h2>Loading...</h2>;
        }

        return (
          <>
            <ul className="list-group mb-4">
              {data.currentPosts.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              ))}
            </ul>
          </>
        );
      }}
    </LocaleContext.Consumer>
  );
}

export default PostCard;
