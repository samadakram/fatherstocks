import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import global from './global/globalReducer';
import auth from './auth/authReducer';

const config = {
    key: 'primary',
    storage: AsyncStorage,
};

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = persistCombineReducers(config, {
    global,
    auth,
});

/* const rootReducer = combineReducers({
     global,
}); */
export default rootReducer;
