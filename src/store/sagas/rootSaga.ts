import { all, fork } from '@redux-saga/core/effects';
import mailSaga from './mailSaga';

export function* rootSaga(): Generator {
  yield all([fork(mailSaga)]);
}
