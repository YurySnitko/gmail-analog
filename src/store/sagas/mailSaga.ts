import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { MailData, mails } from '../../mocked/mails';
import { getMailsFailure, getMailsSuccess } from '../reducers/MailsSlice';

const getAsyncMails = (): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mails);
    }, 1000);
  });
};

function* workGetMailsFetch(): Generator {
  try {
    const data: MailData[] | unknown = yield call(() => {
      return getAsyncMails();
    });
    yield put(getMailsSuccess(data));
  } catch (e) {
    yield put(getMailsFailure());
  }
}

function* mailSaga(): Generator {
  yield all([takeLatest('mails/getMailsFetch', workGetMailsFetch)]);
}

export default mailSaga;
