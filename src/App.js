// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// data
import tvShow from './data/tvShow';
// firebase
import firebase, { dbref, pathref } from './firebase-config';

// React router dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components
import UserInput from './components/UserInput';
import TVCard from './components/TVCard';
import TVInfoPage from './components/TVInfoPage';
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
    <Router basename={process.env.PUBLIC_URL}>
        <Link to={'/'}><h1>nextBinge</h1></Link>

        <UserInput />

        <Route path="/TVCardSmall" exact component={TVCard}/>
        <Route path="/TVCardBig" exact component={TVInfoPage} />

        <footer>
          <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
        </footer>
  </Router>
  );
}

export default App;
