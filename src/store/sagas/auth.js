import { all, call, takeLatest, put } from 'redux-saga/effects';

import { authAPI } from 'api/auth';
import { GET_AUTH } from 'store/actionTypes/auth';

function* getAuthStart() {
  yield takeLatest(GET_AUTH, handleAuth);
}

function* handleAuth() {
  try {
    let res = yield call(authAPI.getAuth, 3000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export function* authSaga() {
  yield all([call(getAuthStart)]);
}
