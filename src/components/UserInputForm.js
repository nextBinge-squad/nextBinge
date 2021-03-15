// API data will be called based on user's desired TV series based on name or other criteria such as genre, network etc.
// Form below will capture that user request, make the API call and return results on the page via a container.

import { useState } from 'react';
import axios from 'axios';
import tvShow from '../data/tvShow';
import Swal from 'sweetalert2';

function UserInputForm({ setShowResults }) {

  const [textInput, setTextInput] = useState('');

  // Highest page number available at TVmaze API "shows" endpoint.
  const MAX_PAGES = 216;

  // Alert in case an API call goes wrong. Uses Sweet Alert 2.
  const tvAlert = {
    title: 'Error!',
    text: 'TV show data could not be loaded at this time, please try again later!',
    icon: 'error',
    timer: 2000
  };

  // Returns a random integer less than or equal to maxNumber.
  const getRandomNumber = (maxNumber) =>
    Math.floor(Math.random() * (maxNumber + 1));

  // Makes a GET request to TVmaze's 'search/shows' endpoint.
  // Saves results to showResults in App.js.
  const searchShows = (name) => {
    axios({
      url: 'https://api.tvmaze.com/search/shows',
      params: {
        q: name,
      },
    }).then(({ data }) =>
      setShowResults(data.map(
        ({ show }) => new tvShow(show)
      ))
    ).catch((error) => Swal.fire(tvAlert));
  };

  // Makes a GET request to TVmaze's 'shows' endpoint.
  // Saves results to showResults in App.js.
  const randomShows = (pageNum) => {

    // amount of shows to display
    const showAmount = 10;

    axios({
      url: 'https://api.tvmaze.com/shows',
      params: {
        page: pageNum,
      },
    }).then(({ data }) => {

      const engShows = data.filter((show) => show.language === "English");
      const randIndex = getRandomNumber(engShows.length - showAmount);

      setShowResults(
        engShows
          .slice(randIndex, randIndex + showAmount)
          .map((show) => new tvShow(show))
      );
    }).catch((error) => Swal.fire(tvAlert));
  };

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
          randomShows(getRandomNumber(MAX_PAGES));
        }}
      >
        {/* possible spot for drop down criteria such as network, review rating */}

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