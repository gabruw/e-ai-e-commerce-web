//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllStates = (page, order, direction) => API.get(ENDPOINTS.STATE.FIND_ALL(page, order, direction));
