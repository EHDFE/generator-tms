import message from 'antd/es/message';
import { fromJS, List, Map } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';
import modelFactory from 'utils/modelFactory';

import { getData } from './service';

export default namespace =>
  modelFactory({
    namespace,
    state: Map({
      data: List(),
      error: false,
      loading: false,
    }),
    actions: {
      GET_ASYNC_DATA: () => ({}),
      GET_ASYNC_DATA_ERROR: error => error,
      GET_ASYNC_DATA_SUCCESS: data => data,
    },
    reducers: {
      GET_ASYNC_DATA(state, action) {
        return state.set('error', false).set('loading', true);
      },
      GET_ASYNC_DATA_ERROR(state, action) {
        return state.set('error', action.payload).set('loading', false);
      },
      GET_ASYNC_DATA_SUCCESS(state, action) {
        return state
          .set('loading', false)
          .set('data', fromJS(action.payload.data));
      },
    },
    effects(CONSTANTS, actions) {
      function* fetchData() {
        try {
          const data = yield call(getData);
          yield put(actions.getAsyncDataSuccess(data));
        } catch (err) {
          yield put(actions.getAsyncDataError(err));
          message.error(err.toString());
        }
      }

      /**
       * Root saga manages watcher lifecycle
       */
      return function* rootSaga() {
        yield takeLatest(CONSTANTS.GET_ASYNC_DATA, fetchData);
      };
    },
  });
