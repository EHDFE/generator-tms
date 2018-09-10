/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import actionTypePrefixer from 'utils/actionTypePrefixer';
import dynamicHoc from 'utils/dynamicHoc';
import actionFactory from './actions';
import * as constants from './constants';
import reducerFactory from './reducer';
import sagaFactory from './saga';
import {
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
} from './selectors';

import styles from './index.module.less';

export interface I<%= componentName %>Props {
  children: React.ReactChildren;
}

export default ({ location }) => {
  const key = `<%= dotName%>${location.search}`;
  const CONSTANTS = actionTypePrefixer(key, constants);
  const actions = actionFactory(CONSTANTS);

  class <%= componentName %> extends React.PureComponent<I<%= componentName %>Props> {
    public render() {
      return <div className={styles.<%= componentName %>}><%= componentName %></div>;
    }
  }

  const mapDispatchToProps = dispatch => ({
    getAsyncData: () => dispatch(actions.getAsyncData()),
  });

  const selectState = state => state.get(key);
  const mapStateToProps = createStructuredSelector({
    error: makeSelectError(selectState),
    loading: makeSelectLoading(selectState),
  });

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

  const withDynamic = dynamicHoc({
    key,
    reducer: reducerFactory(CONSTANTS),
    saga: sagaFactory(CONSTANTS, actions),
  });

  return compose(
    withDynamic,
    withConnect,
  )(<%= componentName %>);
};
