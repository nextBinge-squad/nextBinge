// API data will be called based on user's desired TV series based on name or other criteria such as genre, network etc.
// Form below will capture that user request, make the API call and return results on the page via a container.

import { useState, useReducer } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { dropdowns, generateDropdown } from '../data/tvShowDropdowns';

function UserInputForm({ setShowResults }) {

  const [textInput, setTextInput] = useState('');

  // const [filters, setFilters] = useState({
  //   language: 'English',
  //   genre: 'Any',
  // });

  const [filters, setFilters] = useReducer(

    // reducer function: sets filters[key] to value
    (filters, { key, value }) => ({ ...filters, [key]: value }),

    // initial state
    {}
  );

  // Total number of pages available at TVmaze API "shows" endpoint.
  const TOTAL_PAGES = 217;

  // Alert in case an API call goes wrong. Uses Sweet Alert 2.
  const tvAlert = {
    title: 'Error!',
    text: 'TV show data could not be loaded at this time, please try again later!',
    icon: 'error',
    timer: 2000
  };

  // Returns a random integer less than or equal to maxNumber.
  const getRandomNumber = (maxNumber) =>
    Math.floor(Math.random() * (maxNumber));

  // Makes a GET request to TVmaze's 'search/shows' endpoint.
  // Saves results to showResults in App.js.
  const searchShows = (name) => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: name,
      },
    }).then(({ data }) =>
      setShowResults(data.map(({ show }) => show))
    ).catch((error) => {
      Swal.fire(tvAlert);
    });
  };

  // Makes a GET request to TVmaze's 'shows' endpoint.
  // Saves results to showResults in App.js.
  const randomShows = () => {

    // amount of shows to display
    const showAmount = 10;

    // for each additional filter, request an additional page from API
    // counteracts data "thinning" due to filtering
    let additionalPages = 0;

    for (let key in filters) {
      if (filters[key] !== 'Any') {
        additionalPages++;
      }
    }

    // start at a random page
    // if there are additional pages, don't pick a starting page too close to the end
    const startPage = getRandomNumber(TOTAL_PAGES - additionalPages);

    const promises = [];
    let showData = [];

    for (let page = 0; page <= additionalPages; page++) {
      promises.push(axios({
        url: 'https://api.tvmaze.com/shows',
        params: {
          page: startPage + page,
        }
      }))
    }

    Promise.all(promises).then((pages) => {

      pages.forEach(({ data }) => {
        showData = showData.concat(data);
      });

      const randIndex = getRandomNumber(showData.length - showAmount);

      setShowResults(
        showData
          .filter(show => (
            // Filters

            // language
            show.language === filters.language &&

            // genre
            (
              filters.genre === 'Any' ||
              show.genres.includes(filters.genre)
            )
          ))
          .slice(randIndex, randIndex + showAmount)
      );
    }).catch((error) => {
      Swal.fire(tvAlert);
    });
  };

  const categories = Object.keys(dropdowns);

  return (
    <>
      {/* "search by name" inputs */}
      <form
        className="search"
        onSubmit={(event) => {
          event.preventDefault();
          searchShows(textInput)
          setTextInput('');
        }}
      >

        <label htmlFor="searchField" className="searchField sr-only">Enter the name of a TV show: </label>
        <input
          required
          type="text"
          id="searchField"
          className="searchField"
          placeholder="Search..."
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />

        {/* Buttons could go here so that user can submit their search query. Additional buttons could be added for randomize. */}

        <label htmlFor="submit" className="sr-only">
          Press to search TV shows:
        </label>

        <button
          type="submit"
          id="submit"
        >
          &#x1F50E;
        </button>
      </form>

      {/* "random tv shows" inputs */}
      <form
        className="random"
        onSubmit={(event) => {
          event.preventDefault();
          randomShows();
        }}
      >

        {categories.map(category => generateDropdown(category))}

        <label htmlFor="randomize" className="sr-only">
          Press for random TV shows:
        </label>

        <button
          type="submit"
          id="randomize"
        >
          Randomize!
        </button>
      </form>
    </>
  )
}

export default UserInputForm;