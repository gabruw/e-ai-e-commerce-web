//#region Imports

import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldWrapper from 'components/FieldWrapper';
import React, { useState } from 'react';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import FieldCity from './FieldCity';
import FieldState from './FieldState';
import useStyles from './styles';

//#endregion

const CountryFields = ({ errors }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    const [idState, setIdState] = useState(null);

    return (
        <div className={styles.content}>
            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    value={idState}
                    render={FieldState}
                    name={ADDRESS_FIELD.STATE}
                    label={ADDRESS_LABEL.STATE}
                    onChange={(event) => setIdState(event.target.value)}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    idState={idState}
                    render={FieldCity}
                    name={ADDRESS_FIELD.CITY}
                    label={ADDRESS_LABEL.CITY}
                />
            </div>
        </div>
    );
};

export default CountryFields;
