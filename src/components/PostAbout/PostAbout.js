import React from 'react'

const PostAbout = ({author, content}) => {
  return (
    <div>
      <h1>{author}</h1>
      <p>
        {content}
      </p>
    </div>
  );
}

export default PostAbout
