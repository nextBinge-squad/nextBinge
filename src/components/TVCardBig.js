// Component for detailed TV show information for the user. After search results this will be available after the user hovers over title and will be provided with this data on the right side of the modal.
// Information available is the following: Name of TV series, genres, image, language, priority, summary, webChannel

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function TVCardBig(props) {

  // console.log(props);
  // console.log(props.match.params.showID);
  

  // const [selectedShow, setSelectedShow] = useState({});

  // useEffect(() => {

  //   axios({
  //     url: `http://api.tvmaze.com/shows/${props.match.params.showID}`

  //   }).then((response) => {
  //     setSelectedShow(response.data);
      
  //   })
  // }, [])

  
  // const { 
  //   name, 
  //   image: {
  //     medium
  //   },
  //   summary,
  //   genres,
  //   network: {
  //     country
  //   }
  // } = selectedShow;

  return (
      /* Back button
        <Link to={'/'}><button>Back</button></Link>

        {/* Button to add tv show to list */
      /* <button>&#x2B;</button> */

      <div className="tvShowDetails">
      {/* //   <h3>{name}</h3>
         /* <img src={`${medium}`} alt={`Poster of ${name}`} /> */

        /* <p>{summary}</p> */

        /* <p>{genres.map((genre, index) =>
          <>
            {genre}{index === genres.length - 1 ? '' : ', '}
          </>
        )}</p> */

        /* <p>{country}</p> */ }
      </div>
  );
}

export default TVCardBig;