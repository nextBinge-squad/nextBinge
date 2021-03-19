// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// firebase
import { pathref } from './firebase-config';
// components
import UserInput from './components/UserInput';
import BingeList from './components/BingeList';

function App() {

  const [bingelists, setBingelists] = useState({});

  const [searchResults, setSearchResults] = useState([]);

  // 1. sorts list to ensure order
  // 2. calls setBingelists
  // 3. updates firebase
  const updateList = (key, newList) => {
    newList.shows.sort((a, b) => b.upvotes - a.upvotes);
    // setBingelists({
    //   ...bingelists,
    //   [key]: newList
    // });
    // console.log('new list:', newList);
    pathref('lists').update({ ['/'+key]: newList });
  };

  useEffect(() => {
    pathref('lists').on('value', data => {
      setBingelists(data.val());
    })
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
        {listkeys && listkeys.map(key =>
          <BingeList
            searchResults={false}
            bingelist={bingelists[key]}
            bingelists={bingelists}
            updateList={(newList) => updateList(key, newList)}
          />
        )}

        {searchResults &&
          <div className="allResults">
            <BingeList
              searchResults={true}
              bingelist={{
                name: "Search Results",
                shows: searchResults
              }}
              bingelists={bingelists}
              updateList={(key, newList) => updateList(key, newList)}
            />
          </div>
        }
      </main>

      <footer>
        <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
      </footer>
    </div>
  );
}

export default App;
