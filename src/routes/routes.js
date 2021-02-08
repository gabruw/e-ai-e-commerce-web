//#region Imports

import Address from 'views/address';
import City from 'views/city';
import Error from 'views/error';
import Home from 'views/home';
import Login from 'views/login';
import State from 'views/state';
import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.DEFAULT
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.HOME
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.LOGIN
    },
    {
        exact: true,
        component: Home,
        path: ROUTE_NAME.IN.HOME
    },
    {
        exact: true,
        component: State,
        path: ROUTE_NAME.IN.STATE
    },
    {
        exact: true,
        component: City,
        path: ROUTE_NAME.IN.CITY
    },
    {
        exact: true,
        component: Address,
        path: ROUTE_NAME.IN.ADDRESS
    },
    {
        exact: true,
        component: Error,
        path: '*'
    }
];

export default ROUTES;
