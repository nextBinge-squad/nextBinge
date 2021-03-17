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
function BingeList(props) {

  const { id } = props;

  const [name, setName] = useState(props.name);

  // const reducer = (state, ...args) => {
  //   const shows = state;
  //   shows.splice(...args);
  //   return shows.sort(compareShows);
  // };

  // const [shows, spliceShows] = useReducer(reducer, props.shows);

  const [shows, setShows] = useState(props.shows);

  console.log('shows', shows);

  // uses spliceShows() to add any number of shows to shows[]
  // const addShows = (...args) => {
  //   // filter out all shows whose id already exists in shows[]
  //   const valid = args.filter(
  //     ({ id }) => !shows.some(show => show.id === id)
  //   );
  //   // use splice() to add directly onto end of array (see reducer)
  //   spliceShows(shows.length, 0, ...valid);
  // };

  // uses spliceShows() to remove any number of shows from shows[]
  // note: *must* remove by show id only
  // const removeShows = (...ids) => ids.forEach(id => {
  //   const index = shows.findIndex(show => show.id === id);
  //   // index will be -1 if findIndex fails to find
  //   if (index === -1) return;
  //   // use splice() to remove directly from array at index (see reducer)
  //   spliceShows(index, 1);
  // });

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
            show={show}
            
          />
        </li>
      ) : <p>add a show</p>}
    </ul>
  </>);
}

export default BingeList;
// remove={() => removeShows(show.id)}