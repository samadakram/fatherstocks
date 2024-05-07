import axios from 'axios';
import simpleStore from 'react-native-simple-store';
import { isEmpty } from 'underscore';

const { DEBUG } = require('../constants').default;

const {
    API_URL,
} = require('../constants').default;

// Get Api Url
const getApiUrl = () => `${API_URL}/api`;

// Get hostname url
const getBaseUrl = () => API_URL;

// defaults for axios
const api = (baseUrl) => axios.create({
    baseURL: baseUrl || getApiUrl(),
});

// ----- Auth Key Helpers -----//

/**
 * Get header object for auth token
 * @return object
 */
const getAuthHeaders = (key) => ({ Authorization: `Bearer ${key}` });

const getHeaders = (hdrs) => {
    let headers = hdrs;
    if (isEmpty(hdrs)) {
        headers = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        };
    }

    return headers;
};

// ----- Api Functions ----- //

function fetchApi(opts) {
    const options = opts;
    if (opts.method.toUpperCase() !== 'GET') {
        options.data = opts.data;
    }
    options.headers = getHeaders(opts.headers);
    const fetch = api(opts.baseUrl ? opts.baseUrl : getApiUrl());

    if (DEBUG === true) {
        fetch.interceptors.request.use((config) => {
            // Do something before request is sent
            console.log('%c Making Request:', 'color: #4CAF50; font-weight: bold', config);
            return config;
        }, (error) => {
            // Do something with request error
            console.log('%c Request Error:', 'color: #EC6060; font-weight: bold', error);
            return Promise.reject(error);
        });

        fetch.interceptors.response.use((response) => {
            console.log('%c Response Success:', 'color: #4CAF50; font-weight: bold', response);
            return response;
        }, (error) => {
            console.log('%c Response Error:', 'color: #EC6060; font-weight: bold', error);
            return Promise.reject(error);
        });
    }

    return fetch(options);
}

function fetchApiAuth(opts) {
    return new Promise((resolve, reject) => {
        simpleStore.get('ACCESS_TOKEN')
            .then(key => {
                if (!key) {
                    reject(new Error('not-authorised'));
                }

                const options = opts;
                options.headers = { ...getHeaders(opts.headers), ...getAuthHeaders(key) };
                resolve(fetchApi(options));
            });
    });
}

function uploadImage(image) {

    return new Promise((resolve) => {
        const body = {
            name: image.fileName,
            type: image.type,
            base64: image.base64,
            size: image?.fileSize,
        };
        const opts = {
            method: 'POST',
            url: `${getApiUrl()}/dropzone/update`,
            data: body,
        };
        resolve(fetchApiAuth(opts));
    });
}

function deleteImage(image) {

    return new Promise((resolve) => {
        const body = {
            id: image.id,
        };
        const opts = {
            method: 'DELETE',
            url: `${getApiUrl()}/dropzone/delete`,
            data: body,
        };
        resolve(fetchApiAuth(opts));
    });
}

export {
    getApiUrl,
    getBaseUrl,

    // -- Auth Key Helpers --//
    getAuthHeaders,
    getHeaders,

    fetchApi,
    fetchApiAuth,

    uploadImage,
    deleteImage,
};
