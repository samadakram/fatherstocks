import keyMirror from 'key-mirror';
import { createActions } from 'redux-actions';

export const constants = keyMirror({
    GET_TOKEN_REQUEST: null,
    GET_TOKEN_SUCCESS: null,
    GET_TOKEN_FAILURE: null,

    REFRESH_TOKEN_REQUEST: null,
    REFRESH_TOKEN_SUCCESS: null,
    REFRESH_TOKEN_FAILURE: null,

    REVOKE_TOKEN_REQUEST: null,
    REVOKE_TOKEN_SUCCESS: null,
    REVOKE_TOKEN_FAILURE: null,

    POST_FORGOT_PASSWORD_REQUEST: null,
    POST_FORGOT_PASSWORD_SUCCESS: null,
    POST_FORGOT_PASSWORD_FAILURE: null,

    POST_RESET_PASSWORD_REQUEST: null,
    POST_RESET_PASSWORD_SUCCESS: null,
    POST_RESET_PASSWORD_FAILURE: null,

    POST_REPLACE_TEMPORARY_PASSWORD_REQUEST: null,
    POST_REPLACE_TEMPORARY_PASSWORD_SUCCESS: null,
    POST_REPLACE_TEMPORARY_PASSWORD_FAILURE: null,

    SET_ACCESS_TOKEN: null,
    SET_REFRESH_TOKEN: null,
    SET_USER_LOGIN: null,
    SET_TEMPORARY_PASSWORD: null,

    COMPLETE_REGISTRATION_REQUEST: null,
    COMPLETE_REGISTRATION_SUCCESS: null,
    COMPLETE_REGISTRATION_FAILURE: null,
});

export const {
    getTokenRequest,
    getTokenSuccess,
    getTokenFailure,

    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,

    revokeTokenRequest,
    revokeTokenSuccess,
    revokeTokenFailure,

    postForgotPasswordRequest,
    postForgotPasswordSuccess,
    postForgotPasswordFailure,

    postResetPasswordRequest,
    postResetPasswordSuccess,
    postResetPasswordFailure,

    postReplaceTemporaryPasswordRequest,
    postReplaceTemporaryPasswordSuccess,
    postReplaceTemporaryPasswordFailure,

    setAccessToken,
    setRefreshToken,
    setUserLogin,
    setTemporaryPassword,

    completeRegistrationRequest,
    completeRegistrationSuccess,
    completeRegistrationFailure,
} = createActions(
    constants.GET_TOKEN_REQUEST,
    constants.GET_TOKEN_SUCCESS,
    constants.GET_TOKEN_FAILURE,

    constants.REFRESH_TOKEN_REQUEST,
    constants.REFRESH_TOKEN_SUCCESS,
    constants.REFRESH_TOKEN_FAILURE,

    constants.REVOKE_TOKEN_REQUEST,
    constants.REVOKE_TOKEN_SUCCESS,
    constants.REVOKE_TOKEN_FAILURE,

    constants.POST_FORGOT_PASSWORD_REQUEST,
    constants.POST_FORGOT_PASSWORD_SUCCESS,
    constants.POST_FORGOT_PASSWORD_FAILURE,

    constants.POST_RESET_PASSWORD_REQUEST,
    constants.POST_RESET_PASSWORD_SUCCESS,
    constants.POST_RESET_PASSWORD_FAILURE,

    constants.POST_REPLACE_TEMPORARY_PASSWORD_REQUEST,
    constants.POST_REPLACE_TEMPORARY_PASSWORD_SUCCESS,
    constants.POST_REPLACE_TEMPORARY_PASSWORD_FAILURE,

    constants.SET_ACCESS_TOKEN,
    constants.SET_REFRESH_TOKEN,
    constants.SET_USER_LOGIN,
    constants.SET_TEMPORARY_PASSWORD,

    constants.COMPLETE_REGISTRATION_REQUEST,
    constants.COMPLETE_REGISTRATION_SUCCESS,
    constants.COMPLETE_REGISTRATION_FAILURE,
);
