//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import ADDRESS_LABEL from 'utils/constants/label/address';
import yup from 'validations/yup/yup';

//#endregion

const cepSchema = yup.object().shape({
    [ADDRESS_FIELD.CEP]: yup.string().required().min(9).max(9).label(ADDRESS_LABEL.CEP)
});

export default cepSchema;
