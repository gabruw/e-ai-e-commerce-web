//#region Imports

import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import STATE_FIELD from 'utils/constants/field/state';
import STATE_LABEL from 'utils/constants/label/state';
import useStyles from './styles';

//#endregion

const StateFields = ({ errors }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    return (
        <div className={styles.content}>
            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={TextField}
                    name={STATE_FIELD.NAME}
                    label={STATE_LABEL.THIS}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={TextField}
                    name={STATE_FIELD.COUNTRY}
                    label={STATE_LABEL.COUNTRY}
                />
            </div>
        </div>
    );
};

export default StateFields;
