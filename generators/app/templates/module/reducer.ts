/**
 * <%= componentName %> Reducers
 * @author <%= author %>
 * @date <%= date %>
 */

import { fromJS } from 'immutable';

import {
  GET_ASYNC_DATA,
  GET_ASYNC_DATA_ERROR,
  GET_ASYNC_DATA_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: false,
  loading: false,
  data: {},
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASYNC_DATA:
      return state.set('error', false).set('loading', true);
    case GET_ASYNC_DATA_SUCCESS:
      return state.set('loading', false).set('data', action.data);
    case GET_ASYNC_DATA_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
};

export default reducer;
