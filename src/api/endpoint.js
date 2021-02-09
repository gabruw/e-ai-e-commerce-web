//#region Imports

import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINTS = {
    BASE_URL: 'http://localhost:8743',
    AUTHENTICATION: {
        LOGIN: 'authentication/login',
        REFRESH: 'authentication/refresh'
    },
    CLIENT: {
        EDIT: 'client/edit',
        INCLUDE: 'client/include',
        REMOVE: (id) => `client/remove?${buildQueryParams({ id })}`,
        FIND_BY_CPF: (cpf) => `client/find-cpf?${buildQueryParams({ cpf })}`,
        FIND_ALL: (page, order, direction) => `client/find-all?${buildQueryParams({ page, order, direction })}`
    },
    STATE: {
        EDIT: 'state/edit',
        INCLUDE: 'state/include',
        OPTIONS: 'state/options',
        REMOVE: (id) => `state/remove?${buildQueryParams({ id })}`,
        FIND_BY_NAME: (name) => `state/find-name?${buildQueryParams({ name })}`,
        FIND_ALL: (page, order, direction) => `state/find-all?${buildQueryParams({ page, order, direction })}`
    },
    CITY: {
        EDIT: 'city/edit',
        INCLUDE: 'city/include',
        REMOVE: (id) => `city/remove?${buildQueryParams({ id })}`,
        OPTIONS: (idState) => `city/options?${buildQueryParams({ idState })}`,
        FIND_BY_NAME: (name) => `city/find-name?${buildQueryParams({ name })}`,
        FIND_ALL: (page, order, direction) => `city/find-all?${buildQueryParams({ page, order, direction })}`
    },
    ADDRESS: {
        FIND_ALL: (page, order, direction) => `address/find-all?${buildQueryParams({ page, order, direction })}`,
        FIND_BY_CEP: (cep, page, order, direction) =>
            `address/find-cep?${buildQueryParams({ cep, page, order, direction })}`
    }
};

export default ENDPOINTS;
