import {all, fork} from 'redux-saga/effects';

import authSaga from '../redux/sagas/authSaga';

export function* rootSaga() {
  yield all([fork(authSaga)]);
}
