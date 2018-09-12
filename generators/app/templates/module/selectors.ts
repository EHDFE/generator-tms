/**
 * <%= componentName %> selectors
 * @author <%= author %>
 * @date <%= date %>
 */
import { Map } from 'immutable';
import { createSelector } from 'reselect';

export const makeSelectError = selectState =>
  createSelector(selectState, (state: Map<string, any>) => state.get('error'));

export const makeSelectLoading = selectState =>
  createSelector(selectState, (state: Map<string, any>) => state.get('loading'));

export const makeSelectData = selectState =>
  createSelector(selectState, (state: Map<string, any>) => state.get('data'));
