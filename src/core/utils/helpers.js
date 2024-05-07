const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const DISPLAY_DATE_FORMAT = 'DD/MM/YYYY';

export {
    // Constants
    DATE_FORMAT,
    DISPLAY_DATE_FORMAT,

    // Functions
};

export const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const makeParams = (params) => Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');

/**
 * Takes an endpoint URL and a params object and returns a query string
 *
 * @param {string} url Endpoint URL
 * @param {Object} paramsObject Params object of the form { param1: value1, param2: value2 }
 *
 * @returns Query string
 */
export const makeUrl = (url, paramsObject) => {
    const params = makeParams(paramsObject);
    return `${url}${params.length > 0 ? `?${params}` : ''}`;
};
