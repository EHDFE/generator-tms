/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getAsyncData } from './actions';
import reducer from './reducer';
import rootSaga from './saga';
import {
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
} from './selectors';

import styles from './index.module.less';

export interface I<%= componentName %>Props {
  children: React.ReactChildren;
}

class <%= componentName %> extends React.PureComponent<I<%= componentName %>Props> {
  public render() {
    return <div className={styles.<%= componentName %>}><%= componentName %></div>;
  }
}

const mapDispatchToProps = dispatch => ({
  getAsyncData: () => dispatch(getAsyncData()),
});

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: '<%= dotName%>', reducer });
const withSaga = injectSaga({ key: '<%= dotName%>', saga: rootSaga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(<%= componentName %>);
