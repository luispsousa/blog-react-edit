import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (post) => {
  const {post: {postId, title, description, postImg}} = post;
  return (
    <div style={{ maxWidth: "300px" }}>
      <img style={{ width: "100%" }} src={postImg} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/posts/${postId}`}>Go to Post</Link>
    </div>
  );
}

export default PostCard;