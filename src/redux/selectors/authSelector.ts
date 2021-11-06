import {createSelector} from 'reselect';

import {AppState} from '../../store/rootReducer';

const getPending = (state: AppState) => state.auth.pending;

const getAuth = (state: AppState) => state.auth.auth;

const getError = (state: AppState) => state.auth.error;

export const getAuthSelector = createSelector(getAuth, (auth) => auth);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
