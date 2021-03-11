import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios({
      url: 'https://api.unsplash.com/search/photos',
      params: {
        client_id: 'DVkpqhjTJAEw1t_glS_nIrrxXdxoC32jbO6F3FoEtjA',
        query: 'puppies',
        per_page: 30
      }
    }).then( (res) => {
      
      
    })

  })

  return (
    <h1>nextBinge</h1>
  );
}

export default App;
