/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

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

export default ({ routeId, actions }) => {
  const mapDispatchToProps = dispatch => ({
    getAsyncData: () => dispatch(actions.getAsyncData()),
  });

  const selectState = state => state.get(routeId);
  const mapStateToProps = createStructuredSelector({
    error: makeSelectError(selectState),
    loading: makeSelectLoading(selectState),
  });

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

  return compose(withConnect)(<%= componentName %>);
};
