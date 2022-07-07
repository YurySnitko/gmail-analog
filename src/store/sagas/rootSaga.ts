import { all, fork } from '@redux-saga/core/effects';
import mailSaga from './mailSaga';

export function* rootSaga() {
  yield all([fork(mailSaga)]);
}
