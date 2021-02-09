//#region Imports

import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from 'assets/images/logo.png';
import Separator from 'components/Separator';
import React, { useMemo, useState } from 'react';
import COLOR from 'utils/constants/color';
import FormLogin from './forms/FormLogin';
import FormRegister from './forms/FormRegister';
import useStyles from './styles';

//#endregion

const Login = () => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    const [isLogin, setIsLogin] = useState(true);
    const title = useMemo(() => (isLogin ? 'Login' : 'Registrar-se'), [isLogin]);

    return (
        <div className={styles.container}>
            <Paper className={styles.paper}>
                <div className={styles.content}>
                    <div className={styles.imgContainer}>
                        <img src={Logo} alt='logo' className={styles.img} />
                    </div>

                    <Separator variant='h3' textColor={COLOR.GRAY.MEDIUM}>
                        {title}
                    </Separator>

                    {isLogin ? <FormLogin setIsLogin={setIsLogin} /> : <FormRegister setIsLogin={setIsLogin} />}
                </div>
            </Paper>
        </div>
    );
};

export default Login;
