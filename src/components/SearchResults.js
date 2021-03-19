import { pathref } from "../firebase-config";
import TVCard from "./TVCard";

// shows: an array of tv show objects
function SearchResults({
  shows,
  addShow,
  bingelists
}) {

  return (<>
    <ul className="SearchResults">

      {shows ? shows.map(show =>
        <li className="tvShow" key={show.id}>
          <TVCard
            show={show}
            addSelf={(id) => addShow(id, show)}
            bingelists={bingelists}
            parent={"SearchResults"}
          />
        </li>
      ) : <p>add a show</p>}
    </ul>
  </>);
}

export default SearchResults;