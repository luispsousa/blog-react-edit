import React from 'react'

const Post = ({title, description, postImg, author, date, content}) => {
  return (
    <div className="post__container">
      <h1>{title}</h1>
      <p>{description}</p>
      <img style={{maxWidth: '500px'}} src={postImg} alt="" />
      <div>
        <p>{author}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Post;
