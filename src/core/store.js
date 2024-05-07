import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rehydrationCompleted } from './global/globalActions';

/**
* Reducer
*/
import reducer from './reducers';

/**
* Sagas
*/
import rootSagas from './sagas';

/**
* Init logger
*/
const logger = createLogger({
    collapsed: true,
});

/**
 * ## configureStore
 * @param {Object} the state
 */
export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(
            // RavenMiddleware(SENTRY_DSN),
            sagaMiddleware,
            thunk,
            logger,
        )),
    );

    // to backup state in local storage and restore on load
    persistStore(store, null, () => {
        store.dispatch(rehydrationCompleted(true));
    }); // .purge(); // REMOVE PURGE IN LIVE MODE

    sagaMiddleware.run(rootSagas);

    return store;
}
