import InitialState from './init';

const {
    GET_STATE,
    SET_STATE,
    SET_STORE,

    NETWORK_CHANGE_REQUEST,
    APP_STATE_CHANGE,

    REHYDRATION_COMPLETED,

    REDIRECT_TO_REQUEST,
    CLEAR_REDIRECT_REQUEST,

    CLEAR_REDIRECT,
    REDIRECT_TO,
} = require('./globalActions').constants;

const initialState = new InitialState();
/**
 * ## globalReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function globalReducer(state = initialState, { payload, type }) {
    if (!(state instanceof InitialState)) return initialState.merge(state);

    switch (type) {
    case REHYDRATION_COMPLETED:
        return state.set('rehydrationCompleted', payload);

    case NETWORK_CHANGE_REQUEST:
        return state.set('isOnline', payload);

    case APP_STATE_CHANGE:
        return state.set('appState', payload);

    case REDIRECT_TO_REQUEST: {
        return state.set('redirectTo', payload);
    }

    case CLEAR_REDIRECT_REQUEST: {
        return state.set('redirectTo', null);
    }
    /**
    * ### sets the payload into the store
    *
    * *Note* this is for support of Hot Loading - the payload is the
    * ```store``` itself.
    *
    */
    case SET_STORE:
        return state.set('store', payload);

        /**
    * ### Get the current state from the store
    *
    * The Redux ```store``` provides the state object.
    * We convert each key to JSON and set it in the state
    *
    * *Note*: the global state removes the ```store```, otherwise,
    * when trying to convert to JSON, it will be recursive and fail
    */
    case GET_STATE: {
        const _state = state.store.getState();

        if (payload) {
            const newState = {};
            newState.auth = _state.auth.toJS();
            newState.device = _state.device.toJS();
            newState.profile = _state.profile.toJS();

            // Make sure global doesn't have the previous currentState
            // let _noCurrentState =  _state.global.set('currentState',null);
            // let _noStore = _noCurrentState.set('store',null);

            newState.global = _state.global.set('store', null).toJS();

            return state.set('showState', payload)
                .set('currentState', newState);
        }

        return state.set('showState', payload);
    }

    /**
    * ### Set the state
    *
    * This is in support of Hot Loading
    *
    */
    case SET_STATE: {
        const { global } = JSON.parse(payload);
        const next = state.set('currentUser', global.currentUser)
            .set('showState', false)
            .set('currentState', null);
        return next;
    }

    case CLEAR_REDIRECT: {
        return state.set('redirectTo', null);
    }

    case REDIRECT_TO: {
        return state.set('redirectTo', payload);
    }

    default:
        return state;

    }
}
