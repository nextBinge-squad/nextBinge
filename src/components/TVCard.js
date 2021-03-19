import { useState } from 'react';
import TVInfoPage from './TVInfoPage';
import { generateOptions } from './DynamicDropdown';

function TVCard({
  // tv show data
  show,
  // name of parent component
  parent,
  // defined when rendered in BingeList
  setUpvotes,
  removeSelf,
  // defined when rendered in SearchResults
  addSelf,
  bingelists
}) {

  const listkeys = bingelists && Object.keys(bingelists);

  const [showInfo, setShowInfo] = useState(false);

  const [showBingelists, setShowBingelists] = useState(false);

  const [listID, setListID] = useState('');

  return (
    <>
      <p>{show.name}</p>

      {/* if inside bingelist, show upvote controls */}
      {parent === "BingeList" && <>
        <button
          onClick={() => setUpvotes(++show.upvotes)}
        >+</button>

        <p>upvotes: {show.upvotes}</p>

        <button
          onClick={() => setUpvotes(--show.upvotes)}
        >-</button>
      </>}

      <button
        onClick={setShowInfo(!showInfo)}
      >{(showInfo ? "hide" : "show more")}</button>

      {showInfo ?
        <TVInfoPage
          show={show}
        /> : <></>
      }

      {/* if inside search results, show "add to list" button */}
      {parent === "SearchResults" && <>

        <button
          onClick={() => setShowBingelists(!showBingelists)}
        >
          {showBingelists ? "nvm" : "add to list"}
        </button>
      </>}

      {/* if inside bingelist, show "remove" button */}
      {parent === "BingeList" && <>

        <button
          onClick={removeSelf}
        >
          remove
        </button>
      </>}

      {/* if inside search results and "add to list" was clicked */}
      {((parent === "SearchResults") && showBingelists) ?
        <>
          <label htmlFor={'bingelist' + show.id}>
            choose list
          </label>
          <select
            id={'bingelist' + show.id}
            value={listID}
            onChange={e => setListID(e.target.value)}
          >
            {generateOptions(
              listkeys.map(key => bingelists[key].name),
              listkeys
            )}
          </select>

          <button
            onClick={() => addSelf(listID)}
          >add to list</button>
        </> : <></>
      }
    </>
  );
}

export default TVCard;