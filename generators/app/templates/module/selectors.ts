/**
 * <%= componentName %> selectors
 * @author <%= author %>
 * @date <%= date %>
 */
import { createSelector } from 'reselect';

export const makeSelectError = selectState =>
  createSelector(selectState, state => state.get('error'));

export const makeSelectLoading = selectState =>
  createSelector(selectState, state => state.get('loading'));

export const makeSelectData = selectState =>
  createSelector(selectState, state => state.get('data'));
