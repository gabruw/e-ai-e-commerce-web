//#region Imports

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ActionButtons from 'components/ActionButtons';
import ModalUI from 'containers/ModalUI';
import React, { forwardRef, useMemo } from 'react';
import useStyles from './styles';

//#endregion

const ModalCrudUI = ({ isAdd, isEdit, isRemove, title, children, onConfirm, onClose, ...rest }, ref) => {
    const styles = useStyles();

    const modalTitle = useMemo(
        () =>
            (isRemove && 'Deseja mesmo continuar?') || (isEdit && `Editar ${title}`) || (isAdd && `Adicionar ${title}`),
        [isRemove, isEdit, isAdd, title]
    );

    const modalIcon = useMemo(
        () => (isRemove && <DeleteIcon />) || (isEdit && <EditIcon />) || (isAdd && <AddIcon />),
        [isRemove, isEdit, isAdd]
    );

    return (
        <ModalUI ref={ref} title={modalTitle} icon={modalIcon} {...rest}>
            <div className={styles.content}>
                <div className={styles.children}>{children}</div>

                <div className={styles.actionButtons}>
                    <ActionButtons
                        secondaryText='Voltar'
                        primaryText='Confirmar'
                        secondaryOnClick={() => onClose && onClose()}
                        primaryOnClick={() => onConfirm && onConfirm()}
                    />
                </div>
            </div>
        </ModalUI>
    );
};

export default forwardRef(ModalCrudUI);
