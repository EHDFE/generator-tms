/**
 * <%= componentName %> Saga
 * @author <%= author %>
 * @date <%= date %>
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { getAsyncDataDone, getAsyncDataError } from './actions';
import { GET_ASYNC_DATA } from './constants';

export function* getData() {
  const requestURL = 'testapi';

  try {
    const data = yield call(request, requestURL);
    yield put(getAsyncDataDone(data));
  } catch (err) {
    yield put(getAsyncDataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  yield takeLatest(GET_ASYNC_DATA, getData);
}
