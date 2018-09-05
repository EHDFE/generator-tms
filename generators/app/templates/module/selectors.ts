/**
 * <%= componentName %> selectors
 * @author <%= author %>
 * @date <%= date %>
 */
import { createSelector } from 'reselect';

const selectState = state => state.get('home');

export const makeSelectError = () =>
  createSelector(selectState, state => state.get('error'));

export const makeSelectLoading = () =>
  createSelector(selectState, state => state.get('loading'));

export const makeSelectData = () =>
  createSelector(selectState, state => state.get('data'));
