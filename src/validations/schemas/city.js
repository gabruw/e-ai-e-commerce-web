//#region Imports

import CITY_FIELD from 'utils/constants/field/city';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';
import yup, { emptyStringToUndefined } from 'validations/yup/yup';

//#endregion

const citySchema = yup.object().shape({
    [CITY_FIELD.NAME]: yup.string().required().max(70).label(CITY_LABEL.THIS),
    [CITY_FIELD.STATE_ID]: yup.number().transform(emptyStringToUndefined).required().label(STATE_LABEL.THIS)
});

export default citySchema;
