import keyMirror from 'key-mirror';
import { createActions } from 'redux-actions';

export const constants = keyMirror({
    SET_STORE: null,
    SET_STATE: null,
    GET_STATE: null,

    REHYDRATION_COMPLETED: null,

    NETWORK_CHANGE_REQUEST: null,
    APP_STATE_CHANGE: null,

    CLEAR_REDIRECT: null,
    REDIRECT_TO: null,

    REDIRECT_TO_REQUEST: null,
    CLEAR_REDIRECT_REQUEST: null,
});

export const {
    setStore,
    setState,
    getState,
} = createActions(constants.SET_STORE, constants.SET_STATE, constants.GET_STATE);

export const {
    rehydrationCompleted,
    networkChangeRequest,
    appStateChange,
    clearRedirect,
    redirectTo,
} = createActions(
    constants.REHYDRATION_COMPLETED,
    constants.NETWORK_CHANGE_REQUEST,
    constants.APP_STATE_CHANGE,
    constants.CLEAR_REDIRECT,
    constants.REDIRECT_TO,
);

export const {
    redirectToRequest,
} = createActions(
    constants.REDIRECT_TO_REQUEST,
);

export const {
    clearRedirectRequest,
} = createActions(
    constants.CLEAR_REDIRECT_REQUEST,
);
