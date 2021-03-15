// css
import './App.css';
// hooks
import { useState, useEffect } from 'react';
// data
import tvShow from './data/tvShow';
// firebase
import firebase from './firebase-config';
import { dbref, pathref } from './firebase-config';
// components
import UserInputForm from './components/UserInputForm';
import TVCardSmall from './components/TVCardSmall';
import TVCardBig from './components/TVCardBig';
import BingeList from './components/BingeList';
// 3rd party
  // axios
import axios from 'axios';
  // Sweet Alert
import Swal from 'sweetalert2';

const MAX_PAGES = 216;
// 1. pick a random number between 1 and MAX_PAGES
// 2. query api.tvmaze.com/shows at page = random number
// 3. display all tv shows on that page
// 3a. filter if necessary (based on user input)
// 3b. sort if necessary (alphabetical default, etc)

function App() {

  const [showResults, setShowResults] = useState([]);

  useEffect(() => {
    dbref.on('value', data => {
      console.log(data.val());
    })
  }, []);

  return (
    <>
      <h1>nextBinge</h1>
      <UserInputForm setShowResults={setShowResults} />

      { showResults ? 
        <BingeList tvShows={showResults} /> :
        <h3>Working...</h3>
      }

      <footer>
        <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
      </footer>

    </>
  );
}

export default App;
