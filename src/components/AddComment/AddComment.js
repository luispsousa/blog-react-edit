import React, { Component } from 'react'

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddPost(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Comment...."
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddComment
