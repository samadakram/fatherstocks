/* eslint-disable quote-props, import/named */

import { put, call, takeEvery } from 'redux-saga/effects';
import qs from 'qs';
import { purgeStoredState } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { values, isEmpty, isArray } from 'underscore';

import { showError, showSuccess } from '../utils/notify';
import { fetchApi, fetchApiAuth, getBaseUrl } from '../utils/api';
import { INVALID_TOKEN } from '../utils/values';

import * as RootNavigation from '../utils/navigation';

import {
    getTokenSuccess,
    getTokenFailure,

    refreshTokenSuccess,
    refreshTokenFailure,

    revokeTokenSuccess,
    revokeTokenFailure,

    postForgotPasswordSuccess,
    postForgotPasswordFailure,

    postResetPasswordSuccess,
    postResetPasswordFailure,

    postReplaceTemporaryPasswordSuccess,
    postReplaceTemporaryPasswordFailure,

    setAccessToken,
    setRefreshToken,
    setUserLogin,

    completeRegistrationSuccess,
    completeRegistrationFailure,

    setTemporaryPassword,
} from './authActions';

const {
    GET_TOKEN_REQUEST,
    REFRESH_TOKEN_REQUEST,
    REVOKE_TOKEN_REQUEST,
    POST_FORGOT_PASSWORD_REQUEST,
    POST_RESET_PASSWORD_REQUEST,
    POST_REPLACE_TEMPORARY_PASSWORD_REQUEST,
    COMPLETE_REGISTRATION_REQUEST,
} = require('./authActions').constants;

const { API_CLIENT_ID, API_CLIENT_SECRET } = require('../constants').default;

export const getTokens = (state) => state.auth.tokens;

function* getToken({ payload }) {
    try {
        const response = yield call(fetchApi, {
            method: 'POST',
            url: '/oauth/token',
            baseUrl: getBaseUrl(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            data: qs.stringify({
                client_id: API_CLIENT_ID,
                client_secret: API_CLIENT_SECRET,
                grant_type: 'password',
                username: payload.username,
                password: payload.password,
            }),
        });

        const refresh = response?.data?.refresh_token;
        const access = response?.data?.access_token;
        let successMessage = 'You logged in';

        yield put(getTokenSuccess(response));
        yield put(setAccessToken(access));
        yield put(setRefreshToken(refresh));
        yield put(setUserLogin(response?.data?.user));

        if (+response?.headers['is-temporary-password-login'] === 1) {
            yield put(setTemporaryPassword(true));
            RootNavigation.navigate('ResetPassword');
            successMessage = 'Please reset your password';
        } else {
            // yield put(updateNotificationDeviceRequest());
            // RootNavigation.navigate('Dashboard');
        }

        showSuccess('Success', successMessage);
    } catch (e) {
        console.log(e);
        if (!isEmpty(e.response?.data?.errors)) {
            const errors = values(e.response?.data?.errors).map(r => (isArray(r) ? r[0] : r)).join(', ');
            showError('Invalid Data Given', errors);
        } else {
            showError('Error', e.response?.data?.message || 'Something went wrong');
        }

        yield put(getTokenFailure('Props could not be fetched'));
    }
}

function* refreshToken({ payload }) {
    try {
        const response = yield call(fetchApi, {
            method: 'POST',
            url: '/oauth/token',
            baseUrl: getBaseUrl(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
            },
            data: qs.stringify({
                client_id: API_CLIENT_ID,
                client_secret: API_CLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: payload,
            }),
        });

        const refresh = response?.data?.refresh_token;
        const access = response?.data?.access_token;

        yield put(refreshTokenSuccess());
        yield put(setAccessToken(access));
        yield put(setRefreshToken(refresh));
    } catch (e) {
        yield put(setAccessToken(INVALID_TOKEN));
        yield put(setRefreshToken(INVALID_TOKEN));
        yield put(refreshTokenFailure(e.response ? e.response.data.message : e));
    }
}

function* revokeToken() {
    try {
        yield call(fetchApiAuth, {
            method: 'POST',
            url: '/logout',
        });
        yield put(revokeTokenSuccess());
        yield put(setAccessToken(INVALID_TOKEN));
        yield put(setRefreshToken(INVALID_TOKEN));
        RootNavigation.navigate('Splash');
    } catch (e) {
        showError('Error', 'Something went wrong');
        yield put(revokeTokenFailure(e.response ? e.response.data.message : e));
    }
}

function* postForgotPassword({ payload }) {
    try {
        const response = yield call(fetchApi, {
            method: 'POST',
            url: '/forgot-password',
            data: payload,
        });

        if (response?.status === 200) {
            showSuccess('Success', 'Password reset requested successfully, please check your emails');
        } else if (response?.status === 204) {
            showError('Error', 'Unable to send reset password request');
        }

        yield put(postForgotPasswordSuccess());
    } catch (e) {
        showError('Error', e.response?.data?.message || 'Unable to send reset password request');
        yield put(postForgotPasswordFailure(e.response ? e.response.data.message : e));
    }
}

function* postResetPassword({ payload }) {
    try {
        const { email, token, newPassword, confirmPassword } = payload;
        const response = yield call(fetchApi, {
            method: 'POST',
            data: {
                token,
                email,
                newPassword,
                confirmPassword,
            },
            url: '/reset-password',
        });

        showSuccess('Success', 'You reset your password');
        yield put(postResetPasswordSuccess(response.data));
        RootNavigation.navigate('Login');
    } catch (e) {
        showError('Error', e.response?.data?.message || 'Something went wrong');
        yield put(postResetPasswordFailure(e.response ? e.response.data.message : e));
    }
}

function* postReplaceTemporaryPassword({ payload }) {
    try {
        const response = yield call(fetchApiAuth, {
            method: 'POST',
            data: {
                newPassword: payload.password,
                confirmPassword: payload.passwordConfirm,
            },
            url: '/replace-temporary-password',
        });

        showSuccess('Success', 'You replaced your temporary password');
        yield put(setAccessToken(INVALID_TOKEN));
        yield put(setRefreshToken(INVALID_TOKEN));
        purgeStoredState({ storage: AsyncStorage });

        yield put(postReplaceTemporaryPasswordSuccess(response.data));
        yield put(setTemporaryPassword(false));

        RootNavigation.navigate('Login');
    } catch (e) {
        if (e.response?.data?.message === 'Unauthenticated.') {
            yield put(setAccessToken(INVALID_TOKEN));
            yield put(setRefreshToken(INVALID_TOKEN));
            purgeStoredState({ storage: AsyncStorage });
            showError('Temporary Password Expired', 'Please reset your password to login');
        } else {
            showError('Error', e.response?.data?.message || 'Something went wrong');
        }
        yield put(postReplaceTemporaryPasswordFailure(e.response ? e.response.data.message : e));
    }
}

function* completeRegistration(payload) {
    console.log('payload', payload);
    try {
        const response = yield call(fetchApi, {
            method: 'POST',
            url: '/user/complete-user-registration',
            data: payload.payload,
        });

        const refresh = response?.data?.refresh_token;
        const access = response?.data?.access_token;
        console.log('response', response);
        yield put(getTokenSuccess(response));
        yield put(setAccessToken(access));
        yield put(setRefreshToken(refresh));
        yield put(setUserLogin(response?.data?.user));

        yield put(completeRegistrationSuccess(response.data));
        showSuccess('Success', 'Your account is now created');
        RootNavigation.navigate('Dashboard');

    } catch (e) {
        console.log('e', e.response);
        showError(e.response ? e.response.data.message : e);
        yield put(completeRegistrationFailure(e.response ? e.response.data.message : e));
    }
}

export default function* authSagas() {
    yield* [
        takeEvery(GET_TOKEN_REQUEST, getToken),
        takeEvery(REFRESH_TOKEN_REQUEST, refreshToken),
        takeEvery(REVOKE_TOKEN_REQUEST, revokeToken),
        takeEvery(POST_FORGOT_PASSWORD_REQUEST, postForgotPassword),
        takeEvery(POST_RESET_PASSWORD_REQUEST, postResetPassword),
        takeEvery(POST_REPLACE_TEMPORARY_PASSWORD_REQUEST, postReplaceTemporaryPassword),
        takeEvery(COMPLETE_REGISTRATION_REQUEST, completeRegistration),
    ];
}
