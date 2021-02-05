//#region Imports

import { ThemeProvider } from '@material-ui/core';
import 'assets/css/global.css';
import React from 'react';
import { ClientContextProvider } from 'storages/client/context';
import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

//#endregion

const App = () => (
    <ThemeProvider theme={AppTheme}>
        <ClientContextProvider>
            <AppRoutes />
        </ClientContextProvider>
    </ThemeProvider>
);

export default App;
