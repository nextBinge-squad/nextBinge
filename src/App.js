// css
import './App.css';
// hooks
import { useState } from 'react';
// 3rd party
import axios from 'axios';
// data
import tvShow from './data/tvShow';

const MAX_PAGES = 216;
// 1. pick a random number between 1 and MAX_PAGES
// 2. query api.tvmaze.com/shows at page = random number
// 3. display all tv shows on that page
// 3a. filter if necessary (based on user input)
// 3b. sort if necessary (alphabetical default, etc)

function App() {

  const [shows, setShows] = useState([]);

  const request = () => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: 'x',
      }
    }).then(({ data }) => setShows(data.map(
      ({ show }) => new tvShow(show)
    )));
  }

  return (
    <>
      <h1>nextBinge</h1>
      <button onClick={request}>request</button>

      <ul>
        {shows ? shows.map(show =>
          <li dangerouslySetInnerHTML={{__html: show.summary}}></li>
        ) : "no shows"}
      </ul>

    </>
  );
}

export default App;
