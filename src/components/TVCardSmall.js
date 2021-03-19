import { useState } from "react";

function TVCardSmall({
  tvShow,
  bingelists,
  setBingelists,
  parent
}) {

  const listkeys = Object.keys(bingelists) || [];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [targetListID, setTargetListID] = useState('');

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
        <p>{tvShow.id}</p>

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
                const targetList = bingelists[targetListID];
                if (!targetList.shows.some(
                  ({ id }) => tvShow.id === id
                )) {
                  targetList.shows.push(tvShow);
                }
                setBingelists({
                  ...bingelists,
                  [targetListID]: targetList
                });
              }}
            >
              confirm
            </button>
          </>}
        </>}
        {parent === 'BingeList' &&
          <button
            className="addList"
          >
            remove
          </button>
        }
      </div>
    </>
  )
}

export default TVCardSmall;