// API data will be called based on user's desired TV series based on name or other criteria such as genre, network etc.
// Form below will capture that user request, make the API call and return results on the page via a container.

import { useState } from 'react';
import axios from 'axios';
import tvShow from './data/tvShow';
import Swal from 'sweetalert2';

const MAX_PAGES = 216;
// 1. pick a random number between 1 and MAX_PAGES
// 2. query api.tvmaze.com/shows at page = random number
// 3. display all tv shows on that page
// 3a. filter if necessary (based on user input)
// 3b. sort if necessary (alphabetical default, etc)

const UserSelectTv = (props) => {
    // props is deconstructed
    const { tvResults } = props;

    //Initialize for saving an array of random tv show that is set from the getRandomTvShows function.
    const [randomShows, setRandomShows] = useState([]);

    // Initialize for saving text input from the user. Set as an empty string to start.
    const [textInput, setTextInput] = useState('');

    // Event handler for form. Event flows up to the main App.js.
    const handleSubmit = (event) => {
        // This is to prevent the form from refreshing the page everytime it is submitted.
        event.preventDefault();

        // props is then passed into textInput useState value which is used in the form below.
        tvResults(textInput);

        // This is to clear the search field after the user has submitted their query.
        setTextInput('');

    }

    // Function created to get random integer between AND including the selected range
    const setRandomNumber = (firstNumber, lastNumber) => {

        const randomNumber = Math.floor(Math.random() * (lastNumber - firstNumber + 1) + firstNumber);

        return randomNumber;
    }

    // Function called when button is clicked to return an array of 10 random TV Shows
    const getRandomTvShows = () => {

        // Get a random number between 0 and 216 (the max number of pages when calling the API as per the documentation)
        const randomPage = setRandomNumber(0, MAX_PAGES);

        axios({
            url: 'http://api.tvmaze.com/shows',
            params: {
                // Set the random integer returned from the fucntion to the url parameters
                page: randomPage,
            }
        }).then(({ data }) => {

            const allRandomShows = data.map((show) => {

                // Check if the language of the show is in the desired language
                if (show.language === "English") {

                    //if the show is in English the set send the data to the tvShow constructor
                    return new tvShow(show)
                }
                //else do nothing
                else { }
            })

            // Filter out from the array returned the undefined values so that we can just keep the shows in English
            const filterAllRandomShows = allRandomShows.filter((show) => {
                return show !== undefined;
            });

            // firstRandomShow and lastRandomShow calls the setRandomNumber variable to get a random number from the range of 0 and the returned array length. 
            // Since we are returning 10 shows from the array, the length should be decreased by 10 as to not exceed the array length.
            const firstRandomShow = setRandomNumber(0, (filterAllRandomShows.length - 10));
            const lastRandomShow = firstRandomShow + 10;

            // Using the variables set above now it is possible to slice the returned array at a random point (firstRandomShow) which would then extend until the next 10 tv shows (lastRandomShow)
            setRandomShows(filterAllRandomShows.slice(firstRandomShow, lastRandomShow));


        }).catch(error => {
            return Swal.fire({
                title: 'Error!',
                text: 'TV show data could not be loaded at this time, please try again later!',
                icon: 'error',
                timer: 2000
            })
        })
    }

    return (
        <>
            <form className="" onSubmit={handleSubmit}>
                {/* Text field where the user will enter their desired tv show */}
                {/* User search query is passed into useState updater */}
                <label htmlFor="searchField" className="searchField sr-only">Enter your TV show in the search field</label>
                <input type="text" className="searchField" placeholder="Enter your TV show"
                    onChange={(event) => setTextInput(event.target.value)}
                    value={textInput}
                    required
                />

                {/* Buttons could go here so that user can submit theri search query. Additional buttons could be added for randomize. */}
                <button onClick={getRandomTvShows}>Randomize!</button>
                <button></button>

                {/* possible spot for drop down criteria such as network, review rating */}
            </form>

            <ul>
                {randomShows ? randomShows.map(show =>
                    <li dangerouslySetInnerHTML={{ __html: show.summary }}></li>
                ) : "no shows"}
            </ul>
        </>
    )
}

export default UserSelectTv;