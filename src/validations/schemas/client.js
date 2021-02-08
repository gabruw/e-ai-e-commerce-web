//#region Imports

import CLIENT_FIELD from 'utils/constants/field/client';
import CLIENT_LABEL from 'utils/constants/label/client';
import yup, { emptyStringToUndefined } from 'validations/yup/yup';

//#endregion

const clientSchema = yup.object().shape({
    [CLIENT_FIELD.GENDER]: yup.string().required().label(CLIENT_LABEL.GENDER),
    [CLIENT_FIELD.NAME]: yup.string().required().max(200).label(CLIENT_LABEL.NAME),
    [CLIENT_FIELD.CPF]: yup.string().cpf().required().min(14).max(14).label(CLIENT_LABEL.CPF),
    [CLIENT_FIELD.BIRTH]: yup.date().transform(emptyStringToUndefined).required().label(CLIENT_LABEL.BIRTH)
});

export default clientSchema;
