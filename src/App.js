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
            key={key}
            bingelists={bingelists}
            setBingelists={setBingelists}
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
              setBingelists={setBingelists}
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
