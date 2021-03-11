import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const request = () => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: 'a',
      }
    }).then(({ data }) => setData(data));
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
