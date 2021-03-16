// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// data
import tvShow from './data/tvShow';
// firebase
import firebase from './firebase-config';
import { dbref, pathref } from './firebase-config';

// React router dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import UserInput from './components/UserInput';
import TVCardSmall from './components/TVCardSmall';
import TVCardBig from './components/TVCardBig';
import BingeList from './components/BingeList';
// 3rd party
  // axios
import axios from 'axios';
  // Sweet Alert
import Swal from 'sweetalert2';

function App() {

  useEffect(() => {
    dbref.on('value', data => {
      console.log(data.val());
    })
  }, []);

  return (
    <Router>
        <Link to={'/'}><h1>nextBinge</h1></Link>

        <UserInput />

        {/* <Route path="/TVCardSmall" exact component={TVCardSmall}/> */}
        <Route path="/TVCardBig" exact component={TVCardBig} />

        <footer>
          <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
        </footer>
  </Router>
  );
}

export default App;
