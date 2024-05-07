/* eslint-disable no-fallthrough */
import { Record } from 'immutable';
import simpleStore from 'react-native-simple-store';

import {
    INVALID_TOKEN,
} from '../utils/values';

const {
    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE,

    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_FAILURE,

    REVOKE_TOKEN_REQUEST,
    REVOKE_TOKEN_SUCCESS,
    REVOKE_TOKEN_FAILURE,

    POST_FORGOT_PASSWORD_REQUEST,
    POST_FORGOT_PASSWORD_SUCCESS,
    POST_FORGOT_PASSWORD_FAILURE,

    POST_RESET_PASSWORD_REQUEST,
    POST_RESET_PASSWORD_SUCCESS,
    POST_RESET_PASSWORD_FAILURE,

    POST_REPLACE_TEMPORARY_PASSWORD_REQUEST,
    POST_REPLACE_TEMPORARY_PASSWORD_SUCCESS,
    POST_REPLACE_TEMPORARY_PASSWORD_FAILURE,

    COMPLETE_REGISTRATION_REQUEST,
    COMPLETE_REGISTRATION_SUCCESS,
    COMPLETE_REGISTRATION_FAILURE,

    SET_ACCESS_TOKEN,
    SET_REFRESH_TOKEN,
    SET_USER_LOGIN,
    SET_TEMPORARY_PASSWORD,
} = require('./authActions').constants;

const InitialState = Record({
    tokens: {
        accessToken: null,
        refreshToken: null,
    },
    temporaryPassword: false,
    temporaryPasswordUpdate: false,
    forgotPasswordPosted: null,
    resetPasswordSuccess: null,
    logoutSuccess: null,
    isFetching: true,
    isFetchingRefresh: false,
    error: null,
    userData: '',
});

export const initialState = new InitialState();

export default function authReducer(state = initialState, { payload, type }) {
    if (!(state instanceof InitialState)) return initialState.merge(state);

    switch (type) {

    case GET_TOKEN_REQUEST:
        return state.set('isFetchingRefresh', true).set('error', null).set('temporaryPassword', false);

    case REVOKE_TOKEN_REQUEST:
    case POST_FORGOT_PASSWORD_REQUEST:
    case POST_RESET_PASSWORD_REQUEST:
    case POST_REPLACE_TEMPORARY_PASSWORD_REQUEST:
    case COMPLETE_REGISTRATION_REQUEST:
        return state.set('isFetching', true).set('error', null);

    case REFRESH_TOKEN_REQUEST:
        return state.set('isFetchingRefresh', true).set('error', null);

    case GET_TOKEN_SUCCESS:
        return state.set('isFetching', false)
            .set('error', null);

    case REVOKE_TOKEN_SUCCESS:
        return state.set('isFetching', false).set('error', null);

    case REFRESH_TOKEN_SUCCESS:
        return state.set('isFetchingRefresh', false)
            .set('error', null);

    case POST_FORGOT_PASSWORD_SUCCESS:
    case POST_RESET_PASSWORD_SUCCESS:
        return state.set('isFetching', false).set('error', null);

    case POST_REPLACE_TEMPORARY_PASSWORD_SUCCESS:
        return state.set('isFetching', false);

    case GET_TOKEN_FAILURE:
    case REVOKE_TOKEN_FAILURE:
    case POST_FORGOT_PASSWORD_FAILURE:
    case POST_RESET_PASSWORD_FAILURE:
    case POST_REPLACE_TEMPORARY_PASSWORD_FAILURE:
        return state.set('isFetching', false).set('error', payload || true);

    case REFRESH_TOKEN_FAILURE:
        return state.set('isFetchingRefresh', false).set('error', true);

    case SET_ACCESS_TOKEN: {
        const token = payload || INVALID_TOKEN;
        const { tokens } = state;
        tokens.accessToken = token;
        simpleStore.save('ACCESS_TOKEN', token);
        return state.set('tokens', tokens)
            .set('isFetchingRefresh', false)
            .set('isFetching', false)
            .set('error', null);
    }

    case SET_REFRESH_TOKEN: {
        const token = payload || INVALID_TOKEN;
        const { tokens } = state;
        tokens.refreshToken = token;
        simpleStore.save('REFRESH_TOKEN', token);

        return state.set('tokens', tokens)
            .set('isFetchingRefresh', false)
            .set('isFetching', false)
            .set('error', null);
    }

    case SET_USER_LOGIN:
        return state.set('userData', payload);

    case SET_TEMPORARY_PASSWORD:
        return state.set('temporaryPassword', payload)
            .set('temporaryPasswordUpdate', !state.temporaryPasswordUpdate);

    case COMPLETE_REGISTRATION_SUCCESS:
        return state.set('isFetching', false);

    case COMPLETE_REGISTRATION_FAILURE:
        return state.set('isFetching', false)
            .set('error', payload);
    default:
        return state;

    }
}
