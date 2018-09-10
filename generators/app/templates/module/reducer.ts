/**
 * <%= componentName %> Reducers
 * @author <%= author %>
 * @date <%= date %>
 */

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  data: {},
  error: false,
  loading: false,
});

export default CONSANTS => {
  return (state = initialState, action) => {
    switch (action.type) {
      case CONSANTS.GET_ASYNC_DATA:
        return state.set('error', false).set('loading', true);
      case CONSANTS.GET_ASYNC_DATA_SUCCESS:
        return state.set('loading', false).set('data', action.data);
      case CONSANTS.GET_ASYNC_DATA_ERROR:
        return state.set('error', action.error).set('loading', false);
      default:
        return state;
    }
  };
};
