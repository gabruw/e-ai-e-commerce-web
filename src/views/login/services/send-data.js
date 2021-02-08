//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postLogin = (data) => API.post(ENDPOINTS.AUTHENTICATION.LOGIN, data);

export const postIncludeClient = (data) => API.post(ENDPOINTS.CLIENT.INCLUDE, data);
