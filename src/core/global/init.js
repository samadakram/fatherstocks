import { Record } from 'immutable';
import { AppState } from 'react-native';

const InitialState = Record({
    isFetching: true, // on app start show loading
    showState: false,
    currentState: null,
    store: null,
    rehydrationCompleted: false,

    isOnline: true,
    appState: AppState.currentState,
    redirectTo: null,
});

export default InitialState;
