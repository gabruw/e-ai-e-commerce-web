//#region Imports

import AUTHETICATION_FIELD from 'utils/constants/field/authentication';
import AUTHETICATION_LABEL from 'utils/constants/label/authentication';
import yup from 'validations/yup/yup';

//#endregion

const authenticationSchema = yup.object().shape({
    [AUTHETICATION_FIELD.PASSWORD]: yup.string().required().min(6).label(AUTHETICATION_LABEL.PASSWORD),
    [AUTHETICATION_FIELD.EMAIL]: yup.string().email().required().min(6).max(80).label(AUTHETICATION_LABEL.EMAIL)
});

export default authenticationSchema;
