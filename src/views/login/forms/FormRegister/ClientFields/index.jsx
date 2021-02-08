//#region Imports

import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FieldRadio from 'components/FieldRadio';
import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import CLIENT_FIELD from 'utils/constants/field/client';
import CLIENT_LABEL from 'utils/constants/label/client';
import useStyles from './styles';

//#endregion

const ClientFields = ({ errors }) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    return (
        <div className={styles.content}>
            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    render={TextField}
                    errors={errors}
                    name={CLIENT_FIELD.NAME}
                    label={CLIENT_LABEL.NAME}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    render={TextField}
                    errors={errors}
                    name={CLIENT_FIELD.CPF}
                    label={CLIENT_LABEL.CPF}
                />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper isDate required errors={errors} name={CLIENT_FIELD.BIRTH} label={CLIENT_LABEL.BIRTH} />
            </div>

            <div className={styles.fieldContainer}>
                <FieldWrapper
                    required
                    errors={errors}
                    name={CLIENT_FIELD.GENDER}
                    label={CLIENT_LABEL.GENDER}
                    as={
                        <FieldRadio
                            valueA='MALE'
                            valueB='FEMALE'
                            labelA='Masculino'
                            labelB='Feminino'
                            name={CLIENT_FIELD.GENDER}
                        />
                    }
                />
            </div>
        </div>
    );
};

export default ClientFields;
