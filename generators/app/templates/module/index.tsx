/**
 * <%= componentName %> Component
 * @author <%= author %>
 * @date <%= date %>
 */
import * as React from 'react';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
} from './selectors';

import styles from './index.module.less';

export interface I<%= componentName %>Props {
  children: React.ReactChildren;
  getAsyncData: () => any;
}

class <%= componentName %> extends React.PureComponent<I<%= componentName %>Props> {
  public componentDidMount() {
    this.props.getAsyncData();
  }
  public render() {
    return <div className={styles.<%= componentName %>}><%= componentName %></div>;
  }
}

export default ({ routeId, connectModel }) => {
  return connectModel(actions => {
    const currentState = state => state.get(routeId);
    return {
      mapStateToProps: createStructuredSelector({
        error: makeSelectError(currentState),
        loading: makeSelectLoading(currentState),
      }),
      mapDispatchToProps: dispatch => ({
        getAsyncData: () => dispatch(actions.getAsyncData()),
      }),
    };
  })(<%= componentName %>);
};
