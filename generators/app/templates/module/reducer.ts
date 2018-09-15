/**
 * <%= componentName %> Reducers
 * @author <%= author %>
 * @date <%= date %>
 */

import { fromJS, List, Map } from 'immutable';

// The initial state of the App
const initialState = Map({
  data: List(),
  error: false,
  loading: false,
});

export default CONSANTS => {
  return (state = initialState, action) => {
    switch (action.type) {
      case CONSANTS.GET_ASYNC_DATA:
        return state.set('error', false).set('loading', true);
      case CONSANTS.GET_ASYNC_DATA_SUCCESS:
        return state.set('loading', false).set('data', fromJS(action.payload.data));
      case CONSANTS.GET_ASYNC_DATA_ERROR:
        return state.set('error', action.error).set('loading', false);
      default:
        return state;
    }
  };
};
