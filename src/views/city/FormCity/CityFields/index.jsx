//#region Imports

import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldWrapper from 'components/FieldWrapper';
import FieldState from 'containers/FieldState';
import React from 'react';
import CITY_FIELD from 'utils/constants/field/city';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';
import useStyles from './styles';

//#endregion

const CityFields = ({ errors }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    return (
        <div className={styles.content}>
            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={TextField}
                    name={CITY_FIELD.NAME}
                    label={CITY_LABEL.THIS}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={FieldState}
                    label={STATE_LABEL.THIS}
                    name={CITY_FIELD.STATE_ID}
                />
            </div>
        </div>
    );
};

export default CityFields;
