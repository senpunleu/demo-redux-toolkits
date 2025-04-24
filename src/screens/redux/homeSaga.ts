import {call, put, takeLatest} from 'redux-saga/effects';
import {ApiManager, ApiMethod} from '../../api/ApiManager';
import {
  fetchHomeFailure,
  fetchHomeRequest,
  fetchHomeSuccess,
} from './homeSlice';
import {User} from '../types';

function* fetchHomeData() {
  try {
    const data: User[] = yield call(ApiManager.request, {
      method: ApiMethod.GET,
      path: 'users',
    });
    yield put(fetchHomeSuccess(data));
  } catch (e) {
    yield put(fetchHomeFailure('Something went wrong!'));
  }
}

export function* watchHome() {
  yield takeLatest(fetchHomeRequest.type, fetchHomeData);
}
