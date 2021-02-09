//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getAllCities = (page, order, direction) => API.get(ENDPOINTS.CITY.FIND_ALL(page, order, direction));
