import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { MailData } from '../../mocked/mails';
import { getMailsFailure, getMailsSuccess } from '../reducers/MailsSlice';

const getAsyncMails = async (): Promise<MailData[]> => {
  const response = await fetch(`${window.location.origin}/api/mails`);
  const data: MailData[] = await response.json();
  return data.map((mail) => ({ ...mail, _id: mail._id.toString() }));
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
