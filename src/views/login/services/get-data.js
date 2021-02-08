//#region Imports

import API from 'api/api';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getStateOptions = () => API.get(ENDPOINTS.STATE.OPTIONS);

export const getCityOptions = (idState) => API.get(ENDPOINTS.CITY.OPTIONS(idState));
