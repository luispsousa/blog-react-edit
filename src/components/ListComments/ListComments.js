import React from 'react';

const ListComments = ({list}) => {
  return (
    <div>
      <ul>
        {list.map((comment, i) => {
          return (
            <li key={i}>
              {comment}
              <button
                onClick={() =>
                  removeComment(i, window.location.pathname.match(/\d+/)[0])
                }
              >
                x
              </button>
            </li>
          ); 
            
        })}
      </ul>
    </div>
  );
}

export default ListComments;
