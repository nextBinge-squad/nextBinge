import { useState } from "react";

function TVCardSmall({ tvShow, bingelists, parent, remove, addTo }) {
  const listkeys = Object.keys(bingelists);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [targetListID, setTargetListID] = useState(listkeys[0]);

  return (
    <>
      {tvShow.image && (
        <img
          src={tvShow.image.medium}
          alt={`Poster of tv show ${tvShow.name}...`}
        />
      )}

      <div className="tvShow">
        <h3>{tvShow.name}</h3>

        {tvShow.genres && <p>Genre(s): {tvShow.genres.join(", ")}</p>}

        {tvShow.rating && <p>{"⭐️".repeat(tvShow.rating.average)}</p>}

        {parent === "SearchResults" && (
          <>
            <button onClick={() => setDropdownVisible(!dropdownVisible)}>
              add
            </button>

            {dropdownVisible && (
              <>
                <select
                  value={targetListID}
                  onChange={(e) => setTargetListID(e.target.value)}
                >
                  {listkeys.map((key) => (
                    <option value={key}>{bingelists[key].name}</option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    addTo(targetListID);
                  }}
                >
                  confirm
                </button>
              </>
            )}
          </>
        )}

        {parent === "BingeList" && (
          <button className="remove" onClick={remove}>
            remove
          </button>
        )}

        {/* {parent === 'BingeList' &&
          <div className="vote">
            <button
              className="vote"
            >
              +
          </button>
          upvotes: {tvShow.upvotes}
            <button
              className="vote"
            >
              -
          </button>
          </div>
        } */}
      </div>
    </>
  );
}

export default TVCardSmall;
