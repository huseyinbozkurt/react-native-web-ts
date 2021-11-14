import {all, put, takeLatest} from 'redux-saga/effects';

import {LoginFailure, LoginSuccess} from '../actions/authActions';
import {LOGIN_REQUEST} from '../actions/types/authActionTypes';

function* loginSaga() {
  try {
    // todo
    yield put(
      LoginSuccess({
        auth: [],
      }),
    );
  } catch (error) {
    yield put(
      LoginFailure({
        error: 'error',
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(LOGIN_REQUEST, loginSaga)]);
}

export default todoSaga;
