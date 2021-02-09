//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllAddresses = (page, order, direction) => API.get(ENDPOINTS.ADDRESS.FIND_ALL(page, order, direction));
