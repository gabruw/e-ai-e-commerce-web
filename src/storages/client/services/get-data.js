//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllClients = (page, order, direction) => API.get(ENDPOINTS.CLIENT.FIND_ALL(page, order, direction));
