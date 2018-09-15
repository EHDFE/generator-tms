/**
 * <%= componentName %> Saga
 * @author <%= author %>
 * @date <%= date %>
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import { getResources } from './service';

export default (CONSTANTS, actions) => {
  function* getData() {
    try {
      const data = yield call(getResources);
      yield put(actions.getAsyncDataDone(data));
    } catch (err) {
      yield put(actions.getAsyncDataError(err));
    }
  }

  /**
   * Root saga manages watcher lifecycle
   */
  return function* rootSaga() {
    yield takeLatest(CONSTANTS.GET_ASYNC_DATA, getData);
  }
};
