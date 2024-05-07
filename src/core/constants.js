import {
    ENV,
    VERSION,

    API_URL,
    WEB_URL,

    API_CLIENT_ID,
    API_CLIENT_SECRET,

    PORTRAIT_ONLY,

    BUGSNAG_KEY,
} from '@env'; // eslint-disable-line


const app = {
    ENV,
    VERSION: VERSION || '0.0.0',
    DEBUG: ENV ? ENV === 'local' : true,
    MOCK: false,
    PORTRAIT_ONLY: PORTRAIT_ONLY || true,
    APP_NAME: 'Fatherstock',
    API_CLIENT_ID,
    API_CLIENT_SECRET,
    WEB_URL,
    API_URL,
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    BUGSNAG_KEY,
    DEVICE_TOKEN_KEY: 'DEVICE_TOKEN_KEY',
    USER_JOURNEY_KEY: 'USER_JOURNEY_KEY',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    USERNAME: 'USERNAME',
};

export default app;
