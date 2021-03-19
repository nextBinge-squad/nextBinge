import { useEffect, useState } from "react";
import { pathref } from "../firebase-config";
import TVCardSmall from "./TVCardSmall";

function BingeList({
  searchResults,
  bingelist,
  bingelists,
  updateList,
  listID
}) {

  return (
    <div className="list1">

      <h2>{bingelist.name}</h2>

      <ul className="UserList">
        {bingelist.shows.map((show, index) =>
          <li className="tvShow" key={show.id}>
            <TVCardSmall
              tvShow={show}
              bingelists={bingelists}
              parent={searchResults ? 'SearchResults' : 'BingeList'}
              remove={() => {
                if (bingelist.shows.length > 1) {
                  bingelist.shows.splice(index, 1);
                  updateList(listID, bingelist);
                }
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
    </div>
  );
}

export default BingeList;