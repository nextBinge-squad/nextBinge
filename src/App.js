// css
import './App.css';
// hooks
import { useState, useEffect } from 'react';
// 3rd party
import axios from 'axios';
// data
import tvShow from './data/tvShow';
// firebase
import firebase from './firebase-config';
import { dbref, pathref } from './firebase-config';
// Search Form
import UserSelectTv from './UserSelectTv';
// TV Show Component
import RenderTvShow from './RenderTvShow';

// Sweet Alert
import Swal from 'sweetalert2';

const MAX_PAGES = 216;
// 1. pick a random number between 1 and MAX_PAGES
// 2. query api.tvmaze.com/shows at page = random number
// 3. display all tv shows on that page
// 3a. filter if necessary (based on user input)
// 3b. sort if necessary (alphabetical default, etc)

function App() {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    dbref.on('value', data => {
      console.log(data.val());
    })
  }, []);

  const request = (userSearch) => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: userSearch,
      }
    }).then(({ data }) => {
      setShows(data.map(
        ({ show }) => new tvShow(show)
      ));
    }).catch(error => {
      return Swal.fire({
        title: 'Error!',
        text: 'TV show data could not be loaded at this time, please try again later!',
        icon: 'error',
        timer: 2000
      })
    })
  }

  return (
    <>
      <UserSelectTv tvResults={request} />
      <h1>nextBinge</h1>
      <button onClick={request}>request</button>

      <ul>
        {shows ? shows.map(show =>
          <li>
            <RenderTvShow tvShow={show} />
          </li>
        ) : "no shows"}
      </ul>

    </>
  );
}

export default App;
