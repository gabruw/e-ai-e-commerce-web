//#region Imports

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { Fragment } from 'react';
import useStyles, { useClasses } from './styles';

//#endregion

const Separator = ({ icon, children, textColor, lineColor, textSize, variant = 'h1' }) => {
    const styles = useStyles({ textColor, textSize });
    const classes = useClasses({ lineColor });

    return (
        <Fragment>
            <div className={styles.container}>
                {icon}
                <Typography className={styles.typography} variant={variant}>
                    {children}
                </Typography>
            </div>

            <Divider classes={{ root: classes.divider }} />
        </Fragment>
    );
};

export default Separator;
