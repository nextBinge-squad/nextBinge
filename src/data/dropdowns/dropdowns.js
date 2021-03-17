import country from './country';
import genres from './genres';
import language from './language';
import network from './network';
import webChannel from './webChannel';

const dropdowns = {

  status: [
    "Running",
    "Ended",
    "To Be Determined",
    "In Development",
  ],

  type: [
    "Scripted",
    "Animation",
    "Reality",
    "Talk Show",
    "Documentary",
    "Game Show",
    "News",
    "Sports",
    "Variety",
    "Award Show",
    "Panel Show",
  ],

  genres: genres,

  language: language,

  country: country,

  // has optgroups
  network: network,

  // has optgroups
  webChannel: webChannel,

  // has separate str and val properties
  runtime: [
    {
      str: "30 minutes or less",
      val: {
        max: 30,
        min: 0,
      }
    },
    {
      str: "30 to 60 minutes",
      val: {
        max: 60,
        min: 30,
      }
    },
    {
      str: "Over 60 minutes",
      val: {
        max: Infinity,
        min: 60,
      }
    },
  ],

  rating: [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ],
}

export default dropdowns;