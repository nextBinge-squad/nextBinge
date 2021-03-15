// css
import './App.css';
// hooks
import { useState, useEffect } from 'react';
// data
import tvShow from './data/tvShow';
// firebase
import firebase from './firebase-config';
import { dbref, pathref } from './firebase-config';
// components
// Search Form
import UserSelectTv from './components/UserSelectTv';
import TVCardSmall from './components/TVCardSmall';
import TVCardBig from './components/TVCardBig';
import BingeList from './components/BingeList';
import { A, B, C, D, E, F } from './components/ReducerTest';
// 3rd party
// axios
import axios from 'axios';
// Sweet Alert
import Swal from 'sweetalert2';

const MAX_PAGES = 216;
// 1. pick a random number between 1 and MAX_PAGES
// 2. query api.tvmaze.com/shows at page = random number
// 3. display all tv shows on that page
// 3a. filter if necessary (based on user input)
// 3b. sort if necessary (alphabetical default, etc)

function App() {
  return (<>
    <h1>useState vs useReducer</h1>
    <E />
  </>)
}

export default App;
