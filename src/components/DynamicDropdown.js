// dropdown data imports (for *really big* categories)
import country from '../data/dropdowns/country';
import genres from '../data/dropdowns/genres';
import language from '../data/dropdowns/language';
import network from '../data/dropdowns/network';
import webChannel from '../data/dropdowns/webChannel';

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

// the default value to be displayed on all dropdowns
const DEFAULT_OPTION = "";

/**
 * generates a set of dropdown options from an array of strings
 * @param {array} choices an array of strings
 * @returns an array of JSX <option> literals based on options[]
 */
const generateOptions = choices =>
  choices.map(
    choice => <option value={choice}> {choice} </option>
  );

/**
 * Component
 * renders a controlled input dropdown based on a category
 * @param {string} category A key existing within "dropdowns"
 * @param {object} state some state (from useReducer)
 * @param {function} setState a state dispatcher
 * @returns a controlled dropdown input (<select>) bound to state & setState
 */
function DynamicDropdown({ category, state, setState }) {

  let options;

  // customizes dropdown render based on category
  // (several categories are special cases)
  switch (category) {

    // special cases: must be generated based on optgroup
    case "network":
    case "webChannel":

      // list of optgroup names
      const groupNames = Object.keys(dropdowns[category]);

      // "for each grouping..."
      options = groupNames.map(grouping => (
        <optgroup label={grouping}>
          {/* ...generate an optgroup with that grouping's options */}
          {generateOptions(dropdowns[category][grouping])}
        </optgroup>
      ));
      break;

    // special case: option values and labels are different
    case "runtime":
      options = dropdowns.runtime.map(
        opt => <option value={opt.val}> {opt.str} </option>
      );
      break;

    // special case: option values and labels are different
    case "rating":
      options = dropdowns.rating.map(
        opt => <option value={opt}>{opt}+</option>
      );
      break;

    default:
      options = generateOptions(dropdowns[category]);
      break;
  }

  // add default to beginning of each dropdown
  options.unshift(<option value={DEFAULT_OPTION}> {DEFAULT_OPTION} </option>);

  return (
    <>
      <label htmlFor={category}>{category}: </label>
      <select id={category}

        value={state[category]}
        onChange={event => setState({
          key: category,
          value: event.target.value
        })}
      >
        {options}
      </select>
      <br />
    </>
  );
};

/**
 * helper function holding the logic of show/filter key comparisons
 * @param {string} key a key from the dropdowns object
 * @param {object} show a tv show object from the TVmaze API
 * @param {object} filters the "filters" reduced state from UserInput
 * @returns true if show[key] matches the constraints of filters[key]
 */
const keyCompare = (key, show, filters) => {

  // if this key is unspecified in filter, 
  // evaluate as true
  if (!filters[key]) {
    return true;
  }

  // if this key is specified in filter but not on the show object, 
  // evaluate as false
  if (!show[key]) {
    return false;
  }

  let match = true;

  // check whether this key requires a special testing procedure
  switch (key) {

    default:
      match = (show[key] === filters[key]);
      break;

    // special cases

    // genres must *include* selected genre
    case 'genres':
      match = (show.genres.includes(filters.genres));
      break;

    // runtime must be *between* selected bounds
    case 'runtime':
      const { runtime } = show;
      const { min, max } = filters.runtime;
      match = (
        min <= runtime && runtime <= max
      );
      break;

    // rating must be selected figure *or higher*
    case 'rating':
      match = (show.rating >= filters.rating);
      break;

    // test network/webchannel *name*
    case 'network':
    case 'webChannel':
      match = (show[key].name === filters[key]);
      break;

    // shows have no "country" property;
    // 1. check for network or webchannel
    // 2. test (network/webchannel).country.name
    case 'country':
      const country =
        (show.network || show.webChannel).country.name;

      match = (country === filters.country);
      break;
  }

  return match;
}

export default DynamicDropdown;
export { dropdowns, keyCompare };