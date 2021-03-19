
function TVCardSmall({ tvShow }) {

  return (
    <>


      {tvShow.image &&
        <img
          src={tvShow.image.medium}
          alt={`Poster of tv show ${tvShow.name}...`}
        />
      }

      {/* displays TV Show name and image for small search results */}
      <div className="tvShow">
        <p>{tvShow.name}</p>

        {tvShow.genres && <p>Genre(s): {tvShow.genres.join(', ')}</p>}

        {tvShow.rating && <p>rating: {tvShow.rating.average}</p>}
        <p>{tvShow.id}</p>

        {/* Button to add tv show to list */}
        <button className="addList">&#x2B;</button>
      </div>






      {/* Calling information for TV series to be displayed using TV Card Big Component that will provide additional information for the user after the search result has been loaded */}
      {/* <TVCardBig /> */}
    </>
  )
}

export default TVCardSmall;