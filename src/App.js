// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// firebase
import firebase, { dbref, pathref } from './firebase-config';
// components
import UserInput from './components/UserInput';
import TVCard from './components/TVCard';
import TVInfoPage from './components/TVInfoPage';
import BingeList from './components/BingeList';
// 3rd party
// axios
import axios from 'axios';
// sweet alert
import Swal from 'sweetalert2';
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [bingelists, setBingelists] = useState({});

  useEffect(() => {
    pathref('lists').on('value', data => {
      setBingelists(data.val());
      console.log(data.val());
    })
  }, []);

  const listkeys = [];
  // Object.keys(bingelists);

  console.log('listkeys', listkeys);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="nextBinge wrapper">
        <header>
          <Link to={'/'}><h1 className="title">nextBinge</h1></Link>
        </header>

        <UserInput />

        <Route path="/TVCardSmall" exact component={TVCard} />
        <Route path="/TVCardSmall/TVCardBig" exact component={TVInfoPage} />
        <main>

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