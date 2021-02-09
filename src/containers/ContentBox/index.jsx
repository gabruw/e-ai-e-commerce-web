//#region Imports

import AddIcon from '@material-ui/icons/Add';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ButtonUI from 'components/ButtonUI';
import ContextBox from 'components/ContextBox';
import Loader from 'components/Loader';
import React, { useMemo } from 'react';
import useStyles from './styles';

//#endregion

const ContentBox = ({ icon, title, fetch, children, isLoading, onClickAdd }) => {
    const styles = useStyles();
    const buttonText = useMemo(() => `Adicionar ${title}`, [title]);

    return (
        <ContextBox icon={icon} title={title}>
            <div className={styles.buttonContent}>
                <div className={styles.left}>
                    <ButtonUI
                        minWidth='50px'
                        isLoading={isLoading}
                        className={styles.button}
                        onClick={async () => await fetch()}
                    >
                        <RotateLeftIcon className={styles.icon} />
                    </ButtonUI>
                </div>

                <div className={styles.right} onClick={() => onClickAdd()}>
                    <ButtonUI className={styles.button} isDisabled={isLoading} startIcon={<AddIcon />}>
                        {buttonText}
                    </ButtonUI>
                </div>
            </div>

            {!isLoading && children}
            <Loader isLoading={isLoading} />
        </ContextBox>
    );
};

export default ContentBox;
