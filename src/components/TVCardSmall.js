
import { Fragment } from "react";
import TVCardBig from './TVCardBig';

function TVCardSmall({ tvShow }) {
  console.log(tvShow);

  return (
    <>
      <>
        {/* displays TV Show name and image for small search results */}
        <div className="tvShow">
          <p>{tvShow.name}</p>
          <p>{tvShow.genres[0]} {tvShow.genres[1]} {tvShow.genres[2]} </p>
        </div>

        <image>
          <img src={tvShow.image} alt="poster of tv series..." />
        </image>
        

        {/* displays tv show priority */}
        <p>priority: {tvShow.priority}</p>
      </>

      {/* Calling information for TV series to be displayed using TV Card Big Component that will provide additional information for the user after the search result has been loaded */}
      {/* <TVCardBig /> */}
    </>
  )
}

export default TVCardSmall;