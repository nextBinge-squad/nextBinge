import { useState, useReducer } from 'react';

/* 
Setup: we have a form that asks a user to chose a color, and a pet.
Defaults are "black" and "cat" respectively.
*/

// useState
function A() {

  const [color, setColor] = useState('black');
  const [pet, setPet] = useState('cat');

  return (<>

    <h2>useState:</h2>

    <p>You have a {color} {pet}.</p>

    <select
      id="color"
      value={color}
      onChange={event => setColor(event.target.value)}
    >
      <option value="black">black</option>
      <option value="pink">pink</option>
      <option value="blue">blue</option>
    </select>

    <select
      id="pet"
      value={pet}
      onChange={event => setPet(event.target.value)}
    >
      <option value="cat">cat</option>
      <option value="dog">dog</option>
      <option value="mouse">mouse</option>
    </select>
  </>);
}

// useState combined into one state
function B() {

  const initState = {
    color: 'black',
    pet: 'cat',
  };

  const [formState, setFormState] = useState(initState);

  return (<>

    <h2>useState combined into one state:</h2>

    <p>You have a {formState.color} {formState.pet}.</p>

    <select
      id="color"
      value={formState.color}
      onChange={event => setFormState({
        ...formState,
        color: event.target.value,
      })}
    >
      <option value="black">black</option>
      <option value="pink">pink</option>
      <option value="blue">blue</option>
    </select>

    <select
      id="pet"
      value={formState.pet}
      onChange={event => setFormState({
        ...formState,
        pet: event.target.value,
      })}
    >
      <option value="cat">cat</option>
      <option value="dog">dog</option>
      <option value="mouse">mouse</option>
    </select>
  </>);
}

// useReducer
function C() {

  const reducer = (state, { type, value }) => {
    return { ...state, [type]: value };
  };

  const initState = {
    color: 'black',
    pet: 'cat',
  };

  const [formState, setFormState] = useReducer(reducer, initState);

  return (<>

    <h2>useReducer:</h2>

    <p>You have a {formState.color} {formState.pet}.</p>

    <select
      id="color"
      value={formState.color}
      onChange={event => setFormState({
        type: "color",
        value: event.target.value,
      })}
    >
      <option value="black">black</option>
      <option value="pink">pink</option>
      <option value="blue">blue</option>
    </select>

    <select
      id="pet"
      value={formState.pet}
      onChange={event => setFormState({
        type: "pet",
        value: event.target.value,
      })}
    >
      <option value="cat">cat</option>
      <option value="dog">dog</option>
      <option value="mouse">mouse</option>
    </select>
  </>);
}

// useReducer with minimized syntax
function D() {

  const initState = {
    color: 'black',
    pet: 'cat',
  };

  const reducer = (state, { type, value }) => ({ ...state, [type]: value });

  const [formState, setFormState] = useReducer(reducer, initState);

  return (<>

    <h2>useReducer with minimized syntax:</h2>

    <p>You have a {formState.color} {formState.pet}.</p>

    <select
      id="color"
      value={formState.color}
      onChange={event => setFormState({
        type: "color",
        value: event.target.value,
      })}
    >
      <option value="black">black</option>
      <option value="pink">pink</option>
      <option value="blue">blue</option>
    </select>

    <select
      id="pet"
      value={formState.pet}
      onChange={event => setFormState({
        type: "pet",
        value: event.target.value,
      })}
    >
      <option value="cat">cat</option>
      <option value="dog">dog</option>
      <option value="mouse">mouse</option>
    </select>
  </>);
}

// B + dynamic form
function E() {

  const form = {

    color: [
      'black',
      'pink',
      'blue',
    ],
    pet: [
      'cat',
      'dog',
      'mouse',
    ],
  };

  const formFields = Object.keys(form); // ['color', 'pet']

  // const initState = {
  //   color: 'black',
  //   pet: 'cat',
  // };

  const initState = {};
  for (let field in form) {
    initState[field] = form[field][0];
  }

  const generateDropdown = (field) => {

    return (<>

      <label htmlFor={field}>Choose a {field}</label>

      <select
        id={field}
        value={formState[field]}
        onChange={event => setFormState({
          ...formState,
          [field]: event.target.value,
        })}
      >
        {form[field].map(choice => (
          <option value={choice}>{choice}</option>
        ))}
      </select>
    </>)

  };

  const [formState, setFormState] = useState(initState);

  return (<>

    <h2>useState combined into one state PLUS dynamic form:</h2>

    <p>You have a {formState.color} {formState.pet}.</p>

    {formFields.map(field => generateDropdown(field))}
  </>);
}

// D + dynamic form
function F() {

  const form = {
    color: [
      'black',
      'pink',
      'blue',
    ],
    pet: [
      'cat',
      'dog',
      'mouse',
    ],
  };

  const formFields = Object.keys(form); // ['color', 'pet']

  const reducer = (state, { type, value }) => ({ ...state, [type]: value });

  const initState = {};
  for (let field in form) {
    initState[field] = form[field][0];
  }

  const [formState, setFormState] = useReducer(reducer, initState);

  const generateDropdown = field => (
    <select
      id={field}
      value={formState[field]}
      onChange={event => setFormState({
        type: field,
        value: event.target.value,
      })}
    >

      {form[field].map(choice => (
        <option value={choice}>{choice}</option>
      ))}

    </select>
  );

  return (<>

    <h2>useReducer plus dynamic form:</h2>

    <p>You have a {formState.color} {formState.pet}.</p>

    {formFields.map(field => generateDropdown(field))}
  </>);
}

export { A, B, C, D, E, F };