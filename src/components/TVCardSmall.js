import { useState } from "react";

function TVCardSmall({
  tvShow,
  bingelists,
  parent,
  remove,
  addTo
}) {

  const listkeys = Object.keys(bingelists);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [targetListID, setTargetListID] = useState(listkeys[0]);

  return (
    <>

      {tvShow.image &&
        <img
          src={tvShow.image.medium}
          alt={`Poster of tv show ${tvShow.name}...`}
        />
      }

      <div className="tvShow">
        <p>{tvShow.name}</p>

        {tvShow.genres && <p>Genre(s): {tvShow.genres.join(', ')}</p>}

        {tvShow.rating && <p>rating: {tvShow.rating.average}</p>}
        
        <p>ID: {tvShow.id}</p>

        {parent === 'SearchResults' && <>
          <button
            className="addList"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            add
          </button>

          {dropdownVisible && <>
            <select
              value={targetListID}
              onChange={e => setTargetListID(e.target.value)}
            >
              {listkeys.map(key =>
                <option value={key}>{bingelists[key].name}</option>
              )}
            </select>

            <button
              onClick={() => {
                addTo(targetListID);
              }}
            >
              confirm
            </button>
          </>}
        </>}
      {parent === 'BingeList' &&
        <button
          className="addList"
          onClick={remove}
        >
          remove
          </button>
      }
    </div>
    </>
  )
}

export default TVCardSmall;