/**
 * <%= componentName %> Actions
 * @author <%= author %>
 * @date <%= date %>
 */
import { AnyAction } from 'redux';
import {
  GET_ASYNC_DATA,
  GET_ASYNC_DATA_ERROR,
  GET_ASYNC_DATA_SUCCESS,
} from './constants';


export const getAsyncData = (): AnyAction => ({
  type: GET_ASYNC_DATA,
});

export const getAsyncDataDone = (data): AnyAction => ({
  payload: data,
  type: GET_ASYNC_DATA_SUCCESS,
});

export const getAsyncDataError = (error): AnyAction => ({
  error,
  type: GET_ASYNC_DATA_ERROR,
});
