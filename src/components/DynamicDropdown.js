import dropdowns from '../data/dropdowns/dropdowns';

const categories = Object.keys(dropdowns);

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

export default DynamicDropdown;
export { categories };