import React from 'react';

import LocaleContext from "../LocaleContext";

/* Components */
import PostAbout from '../components/PostAbout/PostAbout';
import Comments from "../components/Comments/Comments";
import PostBody from "../components/PostBody/PostBody";

const Post = ({match}) => {
  const flexContainer = {
    display: 'flex',
    alignItems: 'center'
  }
  
  return (
    <>
      {/* <LocaleContext.Consumer>
        {(data) => {
          return data.posts.map(({postId, title, description, postImg, author, content}, i) => {
          if(postId == match.params.postId) {
            return (
              <div key={i}>
                <div style={flexContainer}>
                  <PostBody
                    title={title}
                    description={description}
                    postImg={postImg}
                    author={author}
                    content={content}
                  />
                  <PostAbout author={author} content={content} />
                </div>
                <Comments id={postId} />
              </div>
            );
          }
        })}}
      </LocaleContext.Consumer> */}
      
    </>
  );
}

export default Post;
