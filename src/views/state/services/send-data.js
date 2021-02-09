//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postState = (data) => API.post(ENDPOINTS.STATE.INCLUDE, data);

export const putState = (data) => API.put(ENDPOINTS.STATE.EDIT, data);

export const deleteState = (id) => API.delete(ENDPOINTS.STATE.REMOVE(id));
