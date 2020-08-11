import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  console.log(postsPerPage, totalPosts, Math.ceil(10))
  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers)
  
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          return (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
