import { pathref } from "../firebase-config";
import TVCardSmall from "./TVCardSmall";

function BingeList({
  bingelist,
  bingelists,
  setBingelists,
  searchResults
}) {

  return (<>

    <h2>{bingelist.name}</h2>

    <ul className="UserList">
      {bingelist.shows.map(show =>
          <li className="tvShow" key={show.id}>
            <TVCardSmall 
              tvShow={show} 
              bingelists={bingelists}
              setBingelists={setBingelists}
              parent={searchResults ? 'SearchResults' : 'BingeList'}
            />
          </li>)}
    </ul>

    <button onClick={()=>pathref('lists').push(bingelist)}>pushma</button>
  </>);
}

export default BingeList;