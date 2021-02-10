//#region Imports

import STATE_FIELD from 'utils/constants/field/state';
import STATE_LABEL from 'utils/constants/label/state';
import yup from 'validations/yup/yup';

//#endregion

const stateSchema = yup.object().shape({
    [STATE_FIELD.NAME]: yup.string().required().max(70).label(STATE_LABEL.THIS),
    [STATE_FIELD.COUNTRY]: yup.string().required().max(70).label(STATE_LABEL.COUNTRY)
});

export default stateSchema;
