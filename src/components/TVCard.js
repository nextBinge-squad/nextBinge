
import TVInfoPage from './TVInfoPage';
// React router dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function TVCard({ show }) {

  console.log(show);

  // return (
  //   <>
      

  //     <Link to={'/TVCardSmall/TVCardBig'}>
  //         <img src={show.image.medium} alt={`Poster of ${show.name}...`} />
  //     </Link>

  //     {/* displays TV Show name and image for small search results */}
  //     <div className="tvShow">
  //       <p>{show.name}</p>
  //       {/* <p>{tvShow.genres.map((genre, index) =>
  //         <>
  //           {genre}{index === tvShow.genres.length - 1 ? '' : ', '}
  //         </>
  //       )}</p> */}

  //       {/* displays tv show priority */}
  //       <p>rating: {show.rating.average}</p>
  //       <p>{show.id}</p>

  //       {/* Button to add tv show to list */}
  //       <button>&#x2B;</button>
  //     </div>

     

      


  //     {/* Calling information for TV series to be displayed using TV Card Big Component that will provide additional information for the user after the search result has been loaded */}
  //     {/* <TVCardBig /> */}
  //   </>
  // );

  return <p>{show.name}</p>
}

export default TVCard;