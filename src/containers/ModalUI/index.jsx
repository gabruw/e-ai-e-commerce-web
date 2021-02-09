//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import React, { forwardRef, Fragment, useImperativeHandle, useState } from 'react';
import useStyles, { useClasses } from './styles';

//#endregion

const ModalUI = ({ icon, title, onClose, width, children }, ref) => {
    const styles = useStyles({ width });
    const classes = useClasses();

    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setOpen(true),
        hide: () => setOpen(false)
    }));

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            className={styles.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fragment>
                <div className={styles.paper}>
                    <div className={styles.header}>
                        <div className={styles.row}>
                            <div className={styles.icon}>{icon}</div>
                            <Typography variant='h2' color='primary'>
                                {title}
                            </Typography>
                        </div>

                        <div className={styles.row}>
                            <Divider className={styles.divider} classes={{ root: classes.divider }} />
                        </div>
                    </div>

                    <div className={styles.modal}>{children}</div>
                </div>
            </Fragment>
        </Modal>
    );
};

export default forwardRef(ModalUI);
