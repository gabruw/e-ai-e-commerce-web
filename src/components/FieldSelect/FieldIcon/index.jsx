//#region Imports

import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { Fragment } from 'react';
import useStyles from './styles';

//#endregion

const FieldIcon = ({ isLoading, ...rest }) => {
    const styles = useStyles();

    return (
        <Fragment>
            {isLoading ? (
                <div className={styles.loadingIcon} {...rest}>
                    <CircularProgress className={styles.loadingIcon} size={16} />
                </div>
            ) : (
                <div className={styles.dropDownIcon} {...rest}>
                    <ArrowDropDownIcon />
                </div>
            )}
        </Fragment>
    );
};

export default FieldIcon;
