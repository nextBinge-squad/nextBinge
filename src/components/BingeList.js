import { pathref } from "../firebase-config";
import TVCardSmall from "./TVCardSmall";

function BingeList({
  searchResults,
  bingelist,
  bingelists,
  updateList,
}) {

  console.log(bingelist.name);
  console.log(bingelist.shows.map(({id})=>id).join(', '));

  return (<>

    <h2>{bingelist.name}</h2>

    <ul className="UserList">
      {bingelist.shows.map((show, index) =>
        <li className="tvShow" key={show.id}>
          <TVCardSmall
            tvShow={show}
            bingelists={bingelists}
            parent={searchResults ? 'SearchResults' : 'BingeList'}
            remove={() => {
              bingelist.shows.splice(index, 1);
              updateList(bingelist);
            }}

            addTo={(key) => {

              const targetList = bingelists[key];

              if (!targetList.shows.some(({ id }) => show.id === id)) {
                // add upvote property to each new show
                show.upvotes = 0;
                targetList.shows.push(show);
                updateList(key, targetList);
              }
            }}
          />
        </li>)}
    </ul>

    <button onClick={() => pathref('lists').push(bingelist)}>pushma</button>
  </>);
}

export default BingeList;