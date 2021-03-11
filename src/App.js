import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const request = () => {
    axios({
      url: 'https://api.unsplash.com/search/photos',
      params: {
        client_id: 'DVkpqhjTJAEw1t_glS_nIrrxXdxoC32jbO6F3FoEtjA',
        query: 'puppies',
        per_page: 30
      }
    }).then((res) => {
      // setData([]);
      console.log(res);
    })
  }

  return (
    <>
      <h1>nextBinge</h1>
      <button onClick={request}>request</button>
    </>
  );
}

export default App;
