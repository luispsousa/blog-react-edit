import React from 'react';

import AddComment from '../AddComment/AddComment';
import ListComments from '../ListComments/ListComments';


class Comments extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <h2>Comments</h2>
        <LocaleContext.Consumer>
          {(data) => {
            return data.posts.map(({postId, comments}, i) => {
              if(this.props.id == postId) {
                return (
                  <div key={i}>
                    <ListComments list={comments}/>
                    <AddComment />
                  </div>
                );
              }
            })
          }}
        </LocaleContext.Consumer>
      </div>
    );
  }
}

export default Comments;
