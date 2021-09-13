import * as querystring from 'querystring';
import * as SecureStore from 'expo-secure-store';

import config from '../config';

import {
    BAD_REQUEST,
    EXPIRED_TOKEN,
    // REFRESHING_TOKEN_FAILED,
    // UNAUTHORIZED,
} from './restCodes';

const BASE_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
};

function post(url: string, data = {}) {
    return _fetch(config.apiURL + url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
}

function put(url: string, data = {}) {
    return _fetch(config.apiURL + url, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
}

async function del(url: string, params = {}) {
    const queryString = '?' + querystring.stringify(params);
    return _fetch(config.apiURL + url + queryString, {
        method: 'DELETE',
        headers: getHeaders(),
    });
}

async function get(url: string, params = {}) {
    const queryString = '?' + querystring.stringify(params);
    return _fetch(config.apiURL + url + queryString, {
        method: 'GET',
        headers: getHeaders(),
    });
}

// @ts-ignore
async function _fetch(url: string, options: any) {
    const res = await fetch(url, options);

    if (res.status >= BAD_REQUEST) {
        if (res.status === EXPIRED_TOKEN) {
            // get token for current user
            const token = null;
            if (token) {
                // refresh token logic
            }
        } else {
            const resJson = await res.json();
            throw resJson.error;
        }
    }
    return res.json();
}


function getHeaders(noAuthorization = false) {
    // get token for current user
    const { token } = null;

    if (token && !noAuthorization) {
        return {
            ...BASE_HEADERS,
            authorization: `Bearer ${token}`,
        };
    }
    return BASE_HEADERS;
}