//#region Imports

import TextField from '@material-ui/core/TextField';
import FieldWrapper from 'components/FieldWrapper';
import React from 'react';
import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';

//#endregion

const CepFields = ({ errors }) => (
    <FieldWrapper
        errors={errors}
        hasMargin={false}
        render={TextField}
        name={ADDRESS_FIELD.CEP}
        placeholder={ADDRESS_LABEL.CEP}
    />
);

export default CepFields;
