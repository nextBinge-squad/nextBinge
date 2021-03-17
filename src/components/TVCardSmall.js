
import TVCardBig from './TVCardBig';
import { Link } from 'react-router-dom';

function TVCardSmall({ tvShow }) {

  return (
    <>
      {/* displays TV Show name and image for small search results */}
      <div className="tvShow">
        <p>{tvShow.name}</p>
        <p>{tvShow.genres.map((genre, index) =>
          <>
            {genre}{index === tvShow.genres.length - 1 ? '' : ', '}
          </>
        )}</p>
      </div>

      <Link to={'/TVCardSmall/TVCardBig'}>
        <image>
          <img src={tvShow.image} alt="poster of tv series..." />
        </image>
      </Link>

      {/* displays tv show priority */}
      <p>priority: {tvShow.priority}</p>

      {/* Button to add tv show to list */}
      <button>&#x2B;</button>


      {/* Calling information for TV series to be displayed using TV Card Big Component that will provide additional information for the user after the search result has been loaded */}
      {/* <TVCardBig /> */}
    </>
  )
}

export default TVCardSmall;