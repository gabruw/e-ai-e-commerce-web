//#region Imports

import ActionButtons from 'components/ActionButtons';
import MessageBox from 'components/MessageBox';
import React, { useCallback, useMemo } from 'react';
import useStyles from './styles';

//#endregion

const FormUI = ({ hide, children, onSubmit, requestErrors, hasSelected, isLoading, setSelected }) => {
    const styles = useStyles();

    const titleMessageBox = useMemo(() => `Erro ao ${hasSelected ? 'editar' : 'incluir'} os dados do estado`, [
        hasSelected
    ]);

    const handleClose = useCallback(() => {
        setSelected();
        hide();
    }, [setSelected, hide]);

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {children}
            <MessageBox title={titleMessageBox} errors={requestErrors} />

            <div className={styles.actionButtons}>
                <ActionButtons
                    secondaryText='Voltar'
                    primaryText='Confirmar'
                    secondaryOnClick={() => handleClose()}
                    isLoading={isLoading}
                />
            </div>
        </form>
    );
};

export default FormUI;
