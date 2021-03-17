import { useReducer, useState } from "react";
import TVCard from "./TVCard";

// tvShows should be an array of TV show objects
function BingeList({ tvShows, firebaseID }) {

  const [name, setName] = useState('');

  // spliceShows() args are the same as array.splice() args
  const [shows, spliceShows] = useReducer(
    // reducer
    (state, ...args) => {
      const shows = state;
      shows.splice(...args);
      return shows;
    },
    // initial state
    tvShows
  );

  // defines a sorting criterion: compare two shows' upvote count
  const compareShows = (tvShow1, tvShow2) =>
    tvShow2.upvotes - tvShow1.upvotes;

  return (<>
    <h3>
      <input 
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </h3>
    <ul className="BingeList">
      {shows
        // sort tvShows based on compareShows criterion
        .sort(compareShows)
        // render each tv show using RenderTvShow component
        .map(tvShow =>
          <li className="tvShow" key={tvShow.id.firebase}>
            <TVCard tvShow={tvShow} />
          </li>)}
    </ul>
  </>);
}

export default BingeList;