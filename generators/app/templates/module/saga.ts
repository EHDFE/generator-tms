/**
 * <%= componentName %> Saga
 * @author <%= author %>
 * @date <%= date %>
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import request, { mocker } from 'utils/request';

export default (CONSTANTS, actions) => {
  function* getData() {
    const url = 'testapi';

    try {
      const data = yield call(request, { url });
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
}
