import React from 'react';

const ListComments = ({list, handleRemoveComment}) => {
  return (
    <div>
      <ul>
        {list.map((comment, i) => {
          return(
            <li 
              key={i}>
              {comment}
              <button onClick={handleRemoveComment(i)}>X</button>
            </li>
          ); 
            
        })}
      </ul>
    </div>
  );
}

export default ListComments;
