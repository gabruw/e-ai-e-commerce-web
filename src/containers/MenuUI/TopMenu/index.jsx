//#region Imports

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from 'assets/images/logo.png';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import useClientContext from 'storages/client/context';
import CLIENT_FIELDS from 'utils/constants/field/client';
import FloatMenu from './FloatMenu';
import useStyles from './styles';

//#endregion

const TopMenu = ({ open, setOpen }) => {
    const styles = useStyles();

    const iconButtonClass = clsx(styles.menuButton, open && styles.hide);
    const appBarClass = clsx(styles.appBar, {
        [styles.appBarShift]: open
    });

    const [menu, setMenu] = useState(null);
    const { client } = useClientContext();

    const name = useMemo(() => client && String(client[CLIENT_FIELDS.NAME]).split(' ')[0], [client]);

    return (
        <AppBar position='fixed' className={appBarClass}>
            <Toolbar>
                <IconButton edge='start' color='inherit' className={iconButtonClass} onClick={() => setOpen(true)}>
                    <MenuIcon className={styles.mainColor} />
                </IconButton>

                <img src={Logo} alt='logo' className={styles.img} />
                <Typography className={styles.mainColor} variant='h3' noWrap>
                    Abastece Aí
                </Typography>

                <div className={styles.right}>
                    <IconButton className={styles.iconButton} onClick={() => setMenu(true)}>
                        <AccountCircle className={styles.mainColor} />
                        <Typography className={styles.mainColor} variant='h6' noWrap>
                            {name}
                        </Typography>
                    </IconButton>

                    <FloatMenu menu={menu} setMenu={setMenu} />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopMenu;
