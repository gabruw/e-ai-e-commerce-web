//#region Imports

import { ThemeProvider } from '@material-ui/core';
import 'assets/css/global.css';
import React from 'react';
import { ClientContextProvider } from 'storages/client/context';
import secureStorage from 'storages/security/storage';
import CLIENT_FIELD from 'utils/constants/field/client';
import AppRoutes from './AppRoutes';
import AppTheme from './AppTheme';

//#endregion

const App = () => {
    // Repopular ClientContext
    const client = secureStorage.getItem(CLIENT_FIELD.THIS);

    return (
        <ThemeProvider theme={AppTheme}>
            <ClientContextProvider defaultValues={{ client }}>
                <AppRoutes />
            </ClientContextProvider>
        </ThemeProvider>
    );
};

export default App;
