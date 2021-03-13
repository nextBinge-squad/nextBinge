// Component used to display results once the user has entered their query, clicked randomize button or dropdown etc.
// The container below will be used to hold the API data and display it.
// Props will be required to pass in data from Axios

import { useState } from 'react';


const DisplayTvResults = () => {
    return (
        <>
        {/* TV show results from user input, randomize should go here:
        // NOTE: Hardcoded at the moment to get an idea of how the results are going to be displayed.  */}
        <section>
            <h2>Title: The Sarah Connor Chronicles</h2>
            <div>
                <img src={`https://static.tvmaze.com/uploads/images/medium_portrait/51/127822.jpg`} alt="Poster of....." />
            </div>

            <p>summary: The mother of all destiny. Her son, the future leader of mankind. Their protector, a Terminator from the future. Together they must take back the future as Sarah Connor prepares her son to fight the war against machines determined to annihilate the human race. The clock is ticking. Can they stop Judgment Day?</p>

            <p>network: FOX</p>
            <p>genre: Drama, Action, Science-Fiction</p>
            <p>Runtime: 60 minutes</p>

            <p>premiered: "2008-01-13"</p>
            <p>Status: Ended</p>

            <p>avg. rating: 8.5</p>

            <p>country: United States</p>

        </section>

            <>
                {/* // + button can be added here so that the current displayed show is added to a new list for the user. */}
                <button>+</button>
            </>
        </>
    )
}

export default DisplayTvResults;