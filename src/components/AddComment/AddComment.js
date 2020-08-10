import React, { Component } from 'react'

import LocaleContext from '../../LocaleContext';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <LocaleContext.Consumer>
        {({ addComment }) => (
          <form 
            className="form" 
            onSubmit={(e) => {
              e.preventDefault();
              addComment(
                this.state.value,
                window.location.pathname.match(/\d+/)[0]
              );
              this.setState({value: ''});
            }}
          >
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
        )}
      </LocaleContext.Consumer>
    );
  }
}

export default AddComment;
