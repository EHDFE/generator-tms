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

export default CONSANTS => ({
  getAsyncData: (): AnyAction => ({
    type: CONSANTS.GET_ASYNC_DATA,
  }),

  getAsyncDataDone: (data): AnyAction => ({
    payload: data,
    type: CONSANTS.GET_ASYNC_DATA_SUCCESS,
  }),

  getAsyncDataError: (error): AnyAction => ({
    error,
    type: CONSANTS.GET_ASYNC_DATA_ERROR,
  }),
})

