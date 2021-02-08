//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import yup, { emptyStringToUndefined } from 'validations/yup/yup';

//#endregion

const addressSchema = yup.object().shape({
    [ADDRESS_FIELD.CITY]: yup.number().max(255).label(ADDRESS_LABEL.CITY),
    [ADDRESS_FIELD.ROAD]: yup.string().required().max(255).label(ADDRESS_LABEL.ROAD),
    [ADDRESS_FIELD.COMPLEMENT]: yup.string().max(255).label(ADDRESS_LABEL.COMPLEMENT),
    [ADDRESS_FIELD.CEP]: yup.string().required().min(9).max(9).label(ADDRESS_LABEL.CEP),
    [ADDRESS_FIELD.NUMBER]: yup
        .number()
        .transform(emptyStringToUndefined)
        .required()
        .max(9999999999)
        .label(ADDRESS_LABEL.NUMBER),
    [ADDRESS_FIELD.NEIGHBORHOOD]: yup.string().required().max(255).label(ADDRESS_LABEL.NEIGHBORHOOD)
});

export default addressSchema;
