//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const postCity = (data) => API.post(ENDPOINTS.CITY.INCLUDE, data);

export const putCity = (data) => API.put(ENDPOINTS.CITY.EDIT, data);

export const deleteCity = (id) => API.delete(ENDPOINTS.CITY.REMOVE(id));
