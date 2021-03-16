// Component for detailed TV show information for the user. After search results this will be available after the user hovers over title and will be provided with this data on the right side of the modal.
// Information available is the following: Name of TV series, genres, image, language, priority, summary, webChannel


function TVCardBig({ tvShow }) {
  // const getGenres = (genres) => {
  //   tvShow.genres.map(genres);
  //   console.log(genres);
  // }
  

  return (
    <>
      <div className="tvShowDetails">
        <h3>Continuum</h3>
        <img src='https://static.tvmaze.com/uploads/images/medium_portrait/0/184.jpg' alt="poster of tv series..." />

        <p>Summary: Continuum is a one-hour police drama centered on Kiera Cameron, a regular cop from 65 years in the future who finds herself trapped in present day Vancouver. She is alone, a stranger in a strange land, and has eight of the most ruthless criminals from the future, known as Liber8, loose in the city.

        Lucky for Kiera, through the use of her CMR (cellular memory recall), a futuristic liquid chip technology implanted in her brain, she connects with Alec Sadler, a seventeen-year-old tech genius. When Kiera calls and Alec answers, a very unique partnership begins.

        Kiera's first desire is to get "home." But until she figures out a way to do that, she must survive in our time period and use all the resources available to her to track and capture the terrorists before they alter history enough to change the course of the future. After all, what's the point of going back if the future isn't the one you left?</p>

        <p>Genres: Science-fiction, Drama, Crime</p>

        <p>Network: Showcase</p>

        <p>Country: Canada</p>
      </div>

    </>


  )
}

export default TVCardBig;