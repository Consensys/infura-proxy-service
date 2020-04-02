/**
 * @name ComponentReducer
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import {useState, useReducer} from 'react';

/* --- Component --- */
const Component = props => {
  const initialState = {};

  function reducer(state, action) {
    switch (action.type) {
      case 'SET_PARAMS':
        return {
          ...state,
          params: action.payload,
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Atom.Flex></Atom.Flex>;
};
export default Component;
