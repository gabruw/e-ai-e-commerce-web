//#region Imports

import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldWrapper from 'components/FieldWrapper';
import FieldState from 'containers/FieldState';
import React, { useState } from 'react';
import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';
import FieldCity from './FieldCity';
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
                    name={STATE_FIELD.THIS}
                    label={STATE_LABEL.THIS}
                    onChange={(event) => setIdState(event.target.value)}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    idState={idState}
                    render={FieldCity}
                    name={CITY_FIELD.THIS}
                    label={CITY_LABEL.THIS}
                />
            </div>
        </div>
    );
};

export default CountryFields;
