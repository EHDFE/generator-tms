/**
 * <%= componentName %> Actions
 * @author <%= author %>
 * @date <%= date %>
 */
import {
  GET_ASYNC_DATA,
  GET_ASYNC_DATA_ERROR,
  GET_ASYNC_DATA_SUCCESS,
} from './constants';

export const getAsyncData = () => ({
  type: GET_ASYNC_DATA,
});

export const getAsyncDataDone = data => ({
  type: GET_ASYNC_DATA_SUCCESS,
  data,
});

export const getAsyncDataError = error => ({
  error,
  type: GET_ASYNC_DATA_ERROR,
});
