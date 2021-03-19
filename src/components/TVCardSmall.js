import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function TVCardSmall({ tvShow }) {

  return (
    <React.Fragment key={tvShow.id}>

      <Link to={'/TVCardSmall/TVCardBig'}>
          <img src={tvShow.image.medium} alt={`Poster of ${tvShow.name}...`} />
      </Link>

      {/* displays TV Show name and image for small search results */}
      <div className="tvShow">
        <p>{tvShow.name}</p>
        <p>{tvShow.genres.map((genre, index) =>
          <>
            {genre}{index === tvShow.genres.length - 1 ? '' : ', '}
          </>
        )}</p>

        {/* displays tv show priority */}
        <p>rating: {tvShow.rating.average}</p>
        <p>{tvShow.id}</p>

        {/* Button to add tv show to list */}
        <button className="addList">&#x2B;</button>
      </div>

     

      


      {/* Calling information for TV series to be displayed using TV Card Big Component that will provide additional information for the user after the search result has been loaded */}
      {/* <TVCardBig /> */}
    </React.Fragment>
  )
}

export default TVCardSmall;