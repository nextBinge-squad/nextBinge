// sass
import './styles/App.scss';
// hooks
import { useState, useEffect, useReducer } from 'react';
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

const addLists = (...lists) => {
  lists.forEach((list) => pathref('lists').push(list));
}

function App() {

  // modifyLists is intentionally generic to support many operations
  const [lists, modifyLists] = useReducer(
    (state, action) => action(state),
    {}
  );

  // update a list
  // params: 
  // - id: id of list being updated
  // - update: a callback called on the list, as in update(list)
  const updateList = (id, update) =>
    modifyLists((lists) => ({
      ...lists,
      [id]: update(lists[id]),
    }));
  //  set lists (firebase)

  // const addShow = (listID, show) =>
  //   updateList(listID, (list) =>
  //     list.some(show2 => show.id === show2.id)
  //       ? list
  //       : list.concat(show)
  //   );

  const addShow = (id, show) => {
    const list = lists[id];
    if (list.some(show2 => show.id === show2.id)) {
      console.log('ERROR: more than 1 show with same id');
      console.log('list:', list);
      console.log('show:', show);
    } else {
      modifyLists(lists => ({
        ...lists,
        [id]: list.concat(show)
      }))
    }
  };

  const removeShow = (id, show) => {
    const list = lists[id];
    const index = list.findIndex(
      target => target.id === show.id
    );
    if (index === -1) {
      console.log('ERROR: failed to find show to delete');
      console.log('list:', list);
      console.log('show:', show);
    } else {
      list.splice(index, 1);
      modifyLists(lists => ({
        ...lists,
        [id]: list
      }));
    }
  };

  useEffect(() => {
    pathref('lists').on('value', data => {

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