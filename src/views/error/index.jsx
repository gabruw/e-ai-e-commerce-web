//#region Imports

import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ErrorGif from 'assets/images/error.gif';
import ButtonUI from 'components/ButtonUI';
import React, { Fragment, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';
import ERROR_TYPE from 'utils/constants/type/error';
import useStyles from './styles';

//#endregion

const Error = () => {
    const params = useMemo(() => new URLSearchParams(window.location.search), []);
    const type = useMemo(() => params.get('type'), [params]);

    return <ErrorContent type={type} />;
};

const ErrorContent = ({ type = 404 }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    const history = useHistory();
    const { client } = useClientContext();

    const error = useMemo(() => (ERROR_TYPE[type] ? ERROR_TYPE[type] : ERROR_TYPE[404]), [type]);

    const goBack = useCallback(() => (client ? history.goBack() : history.push(ROUTE_NAME.OUT.DEFAULT)), [
        client,
        history
    ]);

    return (
        <Fragment>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <img src={ErrorGif} className={styles.img} alt='error' />
                    </div>

                    <div className={styles.textContainer}>
                        <div className={styles.evidence}>
                            <Typography className={styles.evidenceText}>:-(</Typography>
                            <Typography className={styles.evidenceText}>
                                Parece que você ficou sem combustivel!
                            </Typography>
                        </div>

                        <div className={styles.information}>
                            <div className={styles.errorRow}>
                                <Typography className={styles.informationText}>Error</Typography>
                                <Typography className={styles.code}>{error.code}</Typography>
                                <Typography className={styles.informationText}> - {error.title}</Typography>
                            </div>
                            <Typography className={styles.explanation}>{error.text}</Typography>
                        </div>

                        <div className={styles.goBackButton}>
                            <ButtonUI startIcon={<ArrowBackIcon />} onClick={() => goBack()}>
                                Voltar
                            </ButtonUI>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Error;
