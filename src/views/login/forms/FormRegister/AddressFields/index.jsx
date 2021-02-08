//#region Imports

import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import CountryFields from './CountryFields';
import useStyles from './styles';

//#endregion

const AddressFields = ({ errors }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    return (
        <div className={styles.content}>
            <FieldWrapper
                required
                errors={errors}
                render={TextField}
                name={ADDRESS_FIELD.CEP}
                label={ADDRESS_LABEL.CEP}
            />

            <CountryFields />

            <FieldWrapper
                required
                errors={errors}
                render={TextField}
                name={ADDRESS_FIELD.ROAD}
                label={ADDRESS_LABEL.ROAD}
            />

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={TextField}
                    name={ADDRESS_FIELD.NEIGHBORHOOD}
                    label={ADDRESS_LABEL.NEIGHBORHOOD}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    render={TextField}
                    name={ADDRESS_FIELD.NUMBER}
                    label={ADDRESS_LABEL.NUMBER}
                />
            </div>

            <FieldWrapper
                multiline
                errors={errors}
                render={TextField}
                name={ADDRESS_FIELD.COMPLEMENT}
                label={ADDRESS_LABEL.COMPLEMENT}
            />
        </div>
    );
};

export default AddressFields;
