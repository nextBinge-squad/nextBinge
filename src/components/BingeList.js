import { useReducer, useState } from "react";
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
function BingeList(props) {

  const [name, setName] = useState(props.name);

  // spliceShows() args are the same as array.splice() args
  const [shows, spliceShows] = useReducer(
    // reducer
    (state, ...args) => {
      const shows = state;
      // use splice() to add/remove elements from shows[]
      shows.splice(...args);
      // sort resulting array, then return it
      return shows.sort(compareShows);
    },
    // initial state
    props.shows
  );

  // uses spliceShows() to add any number of shows to shows[]
  const addShows = (...args) => {
    // filter out all shows whose id already exists in shows[]
    const valid = args.filter(
      ({ id }) => !shows.some(show => show.id === id)
    );
    // use splice() to add directly onto end of array (see reducer)
    spliceShows(shows.length, 0, ...args);
  };

  // uses spliceShows() to remove any number of shows from shows[]
  // note: *must* remove by show id only
  const removeShows = (...ids) => ids.forEach(id => {
    const index = shows.findIndex(show => show.id === id);
    // index will be -1 if findIndex fails to find
    if (index === -1) return;
    // use splice() to remove directly from array at index (see reducer)
    spliceShows(index, 1);
  })

  return (<>
    <h3>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </h3>
    <ul className="BingeList">
      {shows ? shows.map(show =>
        <li className="tvShow" key={show.id}>
          <TVCard
            tvShow={show}
            remove={() => removeShows(show.id)} />
        </li>
      ) : <p>add a show</p>}
    </ul>
  </>);
}

export default BingeList;