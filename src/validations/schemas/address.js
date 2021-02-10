//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';
import ADDRESS_LABEL from 'utils/constants/label/address';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';
import yup, { emptyStringToUndefined } from 'validations/yup/yup';

//#endregion

const addressSchema = yup.object().shape({
    [CITY_FIELD.THIS]: yup.number().max(255).label(CITY_LABEL.THIS),
    [ADDRESS_FIELD.ROAD]: yup.string().required().max(255).label(ADDRESS_LABEL.ROAD),
    [ADDRESS_FIELD.COMPLEMENT]: yup.string().max(255).label(ADDRESS_LABEL.COMPLEMENT),
    [ADDRESS_FIELD.CEP]: yup.string().required().min(9).max(9).label(ADDRESS_LABEL.CEP),
    [ADDRESS_FIELD.NEIGHBORHOOD]: yup.string().required().max(255).label(ADDRESS_LABEL.NEIGHBORHOOD),
    [STATE_FIELD.THIS]: yup.number().transform(emptyStringToUndefined).required().label(STATE_LABEL.THIS),
    [ADDRESS_FIELD.NUMBER]: yup
        .number()
        .transform(emptyStringToUndefined)
        .required()
        .max(9999999999)
        .label(ADDRESS_LABEL.NUMBER)
});

export default addressSchema;
