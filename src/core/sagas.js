import { all } from 'redux-saga/effects';
import authSaga from './auth/authSagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}
