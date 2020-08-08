import React from 'react';

import LocaleContext from "../LocaleContext";

/* Components */
import PostAbout from '../components/PostAbout/PostAbout';
import Comments from "../components/Comments/Comments";
import PostBody from "../components/PostBody/PostBody";

const Post = ({match}) => {
  return (
    <>
      <LocaleContext.Consumer>
        {(data) => {
          return data.map(({postId, title, description, postImg, author, content}, i) => {
          if(postId == match.params.postId) {
            return(
              <div key={i}>
                <PostBody
                  title={title}
                  description={description}
                  postImg={postImg}
                  author={author}
                  content={content}
                />
                <PostAbout author={author} content={content} />
              </div>
            );
          }
        })}}
      </LocaleContext.Consumer>
      <Comments />
    </>
  );
}

export default Post;
