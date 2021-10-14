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
      match = show[key] === filters[key];
      break;

    // special cases

    // genres must *include* selected genre
    case "genres":
      match = show.genres.includes(filters.genres);
      break;

    // runtime must be *between* selected bounds
    case "runtime":
      const { runtime } = show;
      const [min, max] = filters.runtime;
      match = min <= runtime && runtime <= max;
      break;

    // rating must be selected figure *or higher*
    case "rating":
      match = show.rating >= filters.rating;
      break;

    // test network/webchannel *name*
    case "network":
    case "webChannel":
      match = show[key].name === filters[key];
      break;

    // shows have no "country" property;
    // 1. check for network or webchannel
    // 2. test (network/webchannel).country.name
    case "country":
      const country = (show.network || show.webChannel).country.name;

      match = country === filters.country;
      break;
  }

  return match;
};

export default keyCompare;
