// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// firebase
import firebase, { dbref, pathref } from './firebase-config';
// components
import UserInput from './components/UserInput';
import TVCardSmall from './components/TVCardSmall';
import TVCardBig from './components/TVCardBig';
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

  useEffect(() => {
    dbref.on('value', data => {
      // console.log(data.val());
    })
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="nextBinge wrapper">
        <header>
          <Link to={'/'}><h1 className="title">nextBinge</h1></Link>
        </header>

        <UserInput />

        {/* <Route path="/TVShows" exact component={TVCardSmall} /> */}
        <Route path="/:showID" exact component={TVCardBig} />

        <footer>
          <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
