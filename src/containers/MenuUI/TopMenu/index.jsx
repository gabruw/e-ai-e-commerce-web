//#region Imports

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import Logo from 'assets/images/logo.png';
import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';
import CLIENT_FIELDS from 'utils/constants/field/client';
import useStyles from './styles';

//#endregion

const TopMenu = ({ open, setOpen }) => {
    const styles = useStyles();
    const history = useHistory();

    const [menu, setMenu] = useState(null);
    const { client, removeClient } = useClientContext();

    const name = useMemo(() => client && String(client[CLIENT_FIELDS.NAME]).split(' ')[0], [client]);

    const iconButtonClass = clsx(styles.menuButton, open && styles.hide);
    const appBarClass = clsx(styles.appBar, {
        [styles.appBarShift]: open
    });

    const logout = useCallback(() => {
        removeClient();
        history.push(ROUTE_NAME.OUT.LOGIN);
    }, [removeClient, history]);

    return (
        <AppBar position='fixed' className={appBarClass}>
            <Toolbar>
                <IconButton edge='start' color='inherit' className={iconButtonClass} onClick={() => setOpen(true)}>
                    <MenuIcon className={styles.gray} />
                </IconButton>

                <img src={Logo} alt='logo' className={styles.img} />

                <Typography className={styles.gray} variant='h3' noWrap>
                    Abastece Aí
                </Typography>

                <div className={styles.right}>
                    <IconButton color='inherit' onClick={() => setMenu(true)}>
                        <AccountCircle className={styles.gray} />
                        <Typography className={styles.gray} variant='h6' noWrap>
                            {name}
                        </Typography>
                    </IconButton>

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
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;
