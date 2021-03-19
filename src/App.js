
// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// firebase
import { pathref } from './firebase-config';
// components
import UserInput from './components/UserInput';
import TVCard from './components/TVCard';
import TVInfoPage from './components/TVInfoPage';
import BingeList from './components/BingeList';
import SearchResults from './components/SearchResults';
// 3rd party
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// creates a new bingelist
const createBingelist = (...bingelists) => {
  bingelists.forEach((bingelist) => pathref('lists').push(bingelist));
};

function App() {  

  // search results
  const [searchResults, setSearchResults] = useState([]);

  const listsref = pathref('lists');

  useEffect(() => {
    listsref.on('value', (data) => {
      // setBingelists(data.val());
    });
  }, []);

  // user-created lists ("bingelists")
  const [bingelists, setBingelists] = useState({});

  // FUNCTIONS FOR MUTATING STATE

  // assigns an updated bingelist to bingelists[id]
  // updates the list in firebase
  const updateBingelist = (id, bingelist) => {
    setBingelists({ ...bingelists, [id]: bingelist });
    pathref('lists').update({ [id]: bingelist });
  };
  // adds show to bingelist
  const addShow = (id, show) => {
    const bingelist = bingelists[id];

    // if show is already in bingelist, log an error
    if (bingelist.some(element => element.id === show.id)) {
      console.log('ERROR: more than 1 show with same id');
      console.log('list:', bingelist);
      console.log('show:', show);

      // otherwise, add the show
    } else {
      show.upvotes = 0;
      bingelist.shows.splice(bingelist.shows.length, 0, show);
      updateBingelist(id, bingelist);
    }
  };

  // removes show from bingelist
  const removeShow = (id, index) => {
    const bingelist = bingelists[id];
    bingelist.shows.splice(index, 1);
    updateBingelist(id, bingelist);
  };

  // sets upvotes of show in bingelist
  const setUpvotes = (id, index, upvotes) => {
    const bingelist = bingelists[id];
    bingelist.shows[index].upvotes = upvotes;
    // re-sort the bingelist to ensure order
    bingelist.shows.sort((a, b) => b.upvotes - a.upvotes);
    updateBingelist(id, bingelist);
  }

  // set name of bingelist
  const setName = (id, name) => {
    const bingelist = bingelists[id];
    bingelist.name = name;
    updateBingelist(id, bingelist);
  }

  // END OF FUNCTIONS FOR MUTATING STATE

  const listkeys = Object.keys(bingelists);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="nextBinge wrapper">
        <header>
          <Link to={'/'}><h1 className="title">nextBinge</h1></Link>
        </header>

        <UserInput
          bingelists={bingelists}
        />

        <Route path="/TVCardSmall" exact component={TVCard} />
        <Route path="/TVCardSmall/TVCardBig" exact component={TVInfoPage} />
        <main>
          {listkeys.map((key) => {

            const { name, shows } = bingelists[key];

            return (<BingeList
              name={name}
              setName={(newName) => setName(key, newName)}
              shows={shows}
              removeShow={(index) => removeShow(key, index)}
              setUpvotes={(index, upvotes) => setUpvotes(key, index, upvotes)}
              key={key}
            />);

          })}

          {searchResults &&
            <SearchResults
              shows={searchResults}
              addShow={addShow}
              bingelists={bingelists}
            />}
        </main>

        <footer>
          <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
/*
{listkeys.map(key => {
  console.log(bingelists[key]);
  const { name, shows } = bingelists[key];
  return (
    <BingeList
      name={name}
      shows={shows}
      firebaseID={key}
    />
  );
})}
*/