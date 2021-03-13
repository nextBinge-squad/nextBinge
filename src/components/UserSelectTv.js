// API data will be called based on user's desired TV series based on name or other criteria such as genre, network etc.
// Form below will capture that user request, make the API call and return results on the page via a container.

import { useState } from 'react';

const UserSelectTv = (props) => {
    // props is deconstructed
    const { tvResults } = props;

    // Initialize for saving text input from the user. Set as an empty string to start.
    const [textInput, setTextInput] = useState ('');

    // Event handler for form. Event flows up to the main App.js.
    const handleSubmit = (event) => {
        // This is to prevent the form from refreshing the page everytime it is submitted.
        event.preventDefault();

        // props is then passed into textInput useState value which is used in the form below.
        tvResults(textInput);

        // This is to clear the search field after the user has submitted their query.
        setTextInput('');

    }


    return (
        <form className="" onSubmit={handleSubmit}>
            {/* Text field where the user will enter their desired tv show */}
            {/* User search query is passed into useState updater */}
            <label htmlFor="searchField" className="searchField sr-only">Enter your TV show in the search field</label>
            <input type="text" className="searchField" placeholder="Enter your TV show"
            onChange={ (event) => setTextInput(event.target.value)}
            value={textInput}
            required
            />

            {/* Buttons could go here so that user can submit their search query. Additional buttons could be added for randomize. */}
            {/* Search query button */}
            <button className="submit">Search</button>

            {/* Other buttons as needed */}
            <button></button>
            <button></button>

            {/* possible spot for drop down criteria such as network, review rating */}
        </form>
    )
}

export default UserSelectTv;