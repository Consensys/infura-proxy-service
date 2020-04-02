/**
 *
 * @param {Object} provider
 */
export const searchRequest = (state, dispatch) => ({id, payload}) =>
  dispatch({
    type: 'SET_SEARCH_REQUEST',
    id: id,
    payload: payload,
  });
