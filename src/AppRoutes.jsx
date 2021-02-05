//#region Imports

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ROUTES from 'routes/routes';

//#endregion

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({ path, exact, component: Component }, index) => (
                <Route key={index} path={path} exact={exact}>
                    <Component />
                </Route>
            ))}
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;
