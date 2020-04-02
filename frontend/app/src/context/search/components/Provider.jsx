/* --- Global --- */
import {useContext, useReducer} from 'react';
import Context from '../Context';
import reducers from '../reducer';
import {enhanceActions} from '../middleware/actions';

/* --- Component --- */
const Provider = ({children}) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducers, initialState);
  const actions = enhanceActions(state, dispatch);
  console.log(state, 'Search Context');
  return (
    <Context.Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
