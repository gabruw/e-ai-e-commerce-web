//#region Imports

import ENDPOINTS from 'api/endpoint';
import axios from 'axios';
import secureStorage from 'storages/security/storage';
import CLIENT_FIELD from 'utils/constants/field/client';

//#endregion

const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

API.interceptors.request.use((config) => {
    const client = secureStorage.getItem([CLIENT_FIELD.THIS]);

    if (client && client.token) {
        config.headers.Authorization = `Bearer ${client.token}`;
    }

    return config;
});

export default API;
