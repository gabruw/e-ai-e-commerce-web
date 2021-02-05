//#region Imports

import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINTS = {
    BASE_URL: 'https://localhost:8743',
    AUTHENTICATION: {
        LOGIN: 'authentication/login',
        REFRESH: 'authentication/refresh'
    },
    CLIENT: {
        EDIT: 'client/edit',
        INCLUDE: 'client/include',
        FIND_ALL: 'client/find-all',
        REMOVE: (id) => `client/remove?${buildQueryParams({ id })}`,
        FIND_BY_CPF: (cpf) => `client/find-cpf?${buildQueryParams({ cpf })}`
    },
    STATE: {
        EDIT: 'state/edit',
        INCLUDE: 'state/include',
        OPTIONS: 'state/options',
        FIND_ALL: 'state/find-all',
        REMOVE: (id) => `state/remove?${buildQueryParams({ id })}`,
        FIND_BY_NAME: (name) => `state/find-name?${buildQueryParams({ name })}`
    },
    CITY: {
        EDIT: 'city/edit',
        INCLUDE: 'city/include',
        OPTIONS: 'city/options',
        FIND_ALL: 'city/find-all',
        REMOVE: (id) => `city/remove?${buildQueryParams({ id })}`,
        FIND_BY_NAME: (name) => `city/find-name?${buildQueryParams({ name })}`
    },
    ADDRESS: {
        FIND_ALL: 'address/find-all',
        FIND_BY_CEP: (cep) => `address/find-cep?${buildQueryParams({ cep })}`
    }
};

export default ENDPOINTS;
