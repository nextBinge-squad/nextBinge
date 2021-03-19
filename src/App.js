// sass
import './styles/App.scss';
// hooks
import { useState, useEffect } from 'react';
// firebase
import firebase, { dbref, pathref } from './firebase-config';
// components
import UserInput from './components/UserInput';
import TVCardSmall from './components/TVCardSmall';
import BingeList from './components/BingeList';
// 3rd party
// axios
import axios from 'axios';
// sweet alert
import Swal from 'sweetalert2';

function App() {

  useEffect(() => {
    dbref.on('value', data => {
      console.log(data.val());
    })
  }, []);

  return (
      <div className="nextBinge wrapper">
        <header>
          <h1 className="title">nextBinge</h1>
        </header>

        <UserInput />

        <footer>
          <p>Created at <a href="https://www.junocollege.com">Juno College</a> 2021 by Leon Baram, Sal Jaffal & Lawrence Lee</p>
        </footer>
      </div>
  );
}

export default App;
