import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { Mail, mails } from '../../../consts/mails';
import { getMailsFailure, getMailsSuccess } from '../reducers/MailsSlice';

const getAsyncMails = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(mails);
    }, 1000);
  });
  return promise;
};

function* workGetMailsFetch() {
  try {
    const data: Mail[] = yield call(() => {
      return getAsyncMails();
    });
    yield put(getMailsSuccess(data));
  } catch (e) {
    yield put(getMailsFailure());
  }
}

function* mailSaga() {
  yield all([takeLatest('mails/getMailsFetch', workGetMailsFetch)]);
}

export default mailSaga;
