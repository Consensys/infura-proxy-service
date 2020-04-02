import {SET_SEARCH_REQUEST} from './types';

const reducerActions = (state, action) => {
  const {id, payload, type, error} = action;
  switch (type) {
    /* ----------------------- */
    /*         Common          */
    /* ----------------------- */
    case SET_SEARCH_REQUEST:
      return {
        ...state,
        [id]: {
          status: false,
          payload,
        },
      };

    default:
      // return { ...state };
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
