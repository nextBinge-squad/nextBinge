// css
import './App.css';
// hooks
import { useState } from 'react';
// 3rd party
import axios from 'axios';
// data
import tvShow from './data/tvShow';

function App() {

  const [data, setData] = useState([]);

  const request = () => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: 'a',
      }
    }).then(({ data }) => {
      console.log(data[0].show);
      setData(data);
    });
  }

  return (
    <>
      <h1>nextBinge</h1>
      <button onClick={request}>request</button>
      <button onClick={() => console.log(data)}>log results</button>
    </>
  );
}

export default App;
