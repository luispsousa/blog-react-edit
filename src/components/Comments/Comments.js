import React from 'react';
import AddComment from '../AddComment/AddComment';
import ListComments from '../ListComments/ListComments';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleRemoveComment = this.handleRemoveComment.bind(this);

    this.state = { comments: ['Comment1', 'COmement22e21i3n12'] };
  }
  
  handleAddPost (post) {
    const newComments = [...this.state.comments, post];
    this.setState({ comments: newComments });
  }

  handleRemoveComment() {
    console.log(this);
  }

  render() {
    return (
      <>
        <h2>Comments</h2>
        <ListComments list={this.state.comments} handleRemoveComment={this.handleRemoveComment} />
        <AddComment handleAddPost={this.handleAddPost} />
      </>
    );
  }
}

export default Comments;
