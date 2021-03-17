import { useReducer, useState } from "react";
import { pathref } from "../firebase-config";
import TVCard from "./TVCard";

/* 
params:
- shows: an array of tv show objects
*/
function SearchResults({ shows }) {

  return (<>
    <h3>Search Results</h3>

    <ul className="SearchResults">

      {shows ? shows.map(show =>
        <li className="tvShow" key={show.id}>
          <TVCard
            show={show}
          />
        </li>
      ) : <p>add a show</p>}
    </ul>
  </>);
}

export default SearchResults;
// remove={() => removeShows(show.id)}