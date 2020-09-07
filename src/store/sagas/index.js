import { all, takeLatest, call } from 'redux-saga/effects';
import { authSaga } from './auth';

export default function* rootSaga() {
  yield all([call(authSaga)]);
}
