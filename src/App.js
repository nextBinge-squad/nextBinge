// sass
import "./styles/App.scss";
// hooks
import { useState, useEffect } from "react";
// firebase
import { pathref } from "./firebase-config";
// components
import UserInput from "./components/UserInput";
import BingeList from "./components/BingeList";
// data
import defaultshow from "./data/defaultshow";

function App() {
  const [bingelists, setBingelists] = useState({});

  const [searchResults, setSearchResults] = useState([]);

  const [listMakerVisible, setlistMakerVisible] = useState(false);

  const [newListName, setNewListName] = useState("");

  // 1. sorts list to ensure order
  // 2. calls setBingelists
  // 3. updates firebase
  const updateList = (key, newList) => {
    newList.shows.sort((a, b) => b.upvotes - a.upvotes);
    // setBingelists({
    //   ...bingelists,
    //   [key]: newList
    // });
    console.log("new list:", newList);
    pathref("lists").update({ ["/" + key]: newList });
  };

  useEffect(() => {
    pathref("lists").on("value", (data) => {
      setBingelists(data.val());
    });
  }, []);

  const listkeys = bingelists && Object.keys(bingelists);

  return (
    <div className="nextBinge wrapper">
      <header>
        <h1 className="title">nextBinge</h1>
      </header>

      <UserInput
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />

      <main>
        <button onClick={() => setlistMakerVisible(!listMakerVisible)}>
          create new list
        </button>

        {listMakerVisible && (
          <div className="addList">
            <label htmlFor="newListName">name: </label>
            <input
              type="text"
              id="newListName"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <button
              onClick={() =>
                pathref("lists").push({
                  name: newListName,
                  shows: [defaultshow],
                })
              }
            >
              confirm
            </button>
          </div>
        )}

        <div className="allLists">
          {listkeys &&
            listkeys.map((key) => (
              <BingeList
                searchResults={false}
                bingelist={bingelists[key]}
                bingelists={bingelists}
                updateList={updateList}
                key={key}
                listID={key}
              />
            ))}
        </div>

        {searchResults && (
          <div className="allResults">
            <BingeList
              searchResults={true}
              bingelist={{
                name: "Search Results",
                shows: searchResults,
              }}
              bingelists={bingelists}
              updateList={updateList}
            />
          </div>
        )}
      </main>

      <footer>
        <p>
          Created at <a href="https://www.junocollege.com">Juno College</a> 2021
          by Leon Baram, Sal Jaffal & Lawrence Lee
        </p>
      </footer>
    </div>
  );
}

export default App;
