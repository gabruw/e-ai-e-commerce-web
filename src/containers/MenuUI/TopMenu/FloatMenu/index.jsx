//#region Imports

import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';

//#endregion

const FloatMenu = ({ menu, setMenu }) => {
    const history = useHistory();
    const { removeClient } = useClientContext();

    const logout = useCallback(() => {
        removeClient();
        history.push(ROUTE_NAME.OUT.LOGIN);
    }, [removeClient, history]);

    return (
        <Menu
            keepMounted
            open={Boolean(menu)}
            anchorEl={Boolean(menu)}
            onClose={() => setMenu(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuItem onClick={() => history.push(ROUTE_NAME.IN.HOME)}>
                <SettingsIcon />
                Configurações
            </MenuItem>

            <Divider />

            <MenuItem onClick={() => logout()}>
                <LocalHotelIcon />
                Logout
            </MenuItem>
        </Menu>
    );
};

export default FloatMenu;
