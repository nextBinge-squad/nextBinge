import { useReducer, useState } from "react";
import { pathref } from "../firebase-config";
import TVCard from "./TVCard";

// define a sorting criterion: compare two shows' upvote count
const compareShows = (showA, showB) =>
  showB.upvotes - showA.upvotes;

/* 
params:
- name: this list's name
- shows: an array of tv show objects
- firebaseID: unique firebase ID
*/
function BingeList({
  name,
  shows,
  id
}) {

  return (<>
    <h3>
      <input
        type="text"
        value={name}
      />
    </h3>
    <ul className="BingeList">
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

export default BingeList;
