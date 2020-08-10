import React from 'react';

const Page404 = ({location}) => {
  return (
    <div>
      <h1>Ups... {location.pathname} doesn't exist! :/</h1>
    </div>
  )
}

export default Page404;
