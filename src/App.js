// css
import './App.css';
// hooks
import { useState } from 'react';
// 3rd party
import axios from 'axios';
// data
import tvShow from './data/tvShow';

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
