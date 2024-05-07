import Bugsnag from '@bugsnag/react-native';
import { forEach } from 'underscore';

const { DEBUG } = require('../constants').default;

const bugsnag = {};

const notify = (message, data = null) => {

    if (DEBUG) {
        console.log(message, data);
        return;
    }

    Bugsnag.notify(new Error(message), (event) => {
        forEach(data || {}, (value, key) => {
            event.addMetadata(key, value);
        });
    });
};

bugsnag.notify = notify;

export default bugsnag;
