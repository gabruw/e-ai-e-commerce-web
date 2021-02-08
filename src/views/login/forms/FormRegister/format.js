//#region Imports

import ADDRESS_FIELD from 'utils/constants/field/address';
import AUTHETICATION_FIELD from 'utils/constants/field/authentication';
import CLIENT_FIELD from 'utils/constants/field/client';

//#endregion

const formSubmitFormat = (form) => {
    return {
        [CLIENT_FIELD.CPF]: form[CLIENT_FIELD.CPF],
        [CLIENT_FIELD.NAME]: form[CLIENT_FIELD.NAME],
        [CLIENT_FIELD.BIRTH]: form[CLIENT_FIELD.BIRTH],
        [CLIENT_FIELD.GENDER]: form[CLIENT_FIELD.GENDER],
        addresses: [
            {
                idCity: form[ADDRESS_FIELD.CITY],
                [ADDRESS_FIELD.CEP]: form[ADDRESS_FIELD.CEP],
                [ADDRESS_FIELD.ROAD]: form[ADDRESS_FIELD.ROAD],
                [ADDRESS_FIELD.NUMBER]: form[ADDRESS_FIELD.NUMBER],
                [ADDRESS_FIELD.COMPLEMENT]: form[ADDRESS_FIELD.COMPLEMENT],
                [ADDRESS_FIELD.NEIGHBORHOOD]: form[ADDRESS_FIELD.NEIGHBORHOOD]
            }
        ],
        [AUTHETICATION_FIELD.THIS]: {
            [AUTHETICATION_FIELD.ROLE]: 'USER',
            [AUTHETICATION_FIELD.EMAIL]: form[AUTHETICATION_FIELD.EMAIL],
            [AUTHETICATION_FIELD.PASSWORD]: form[AUTHETICATION_FIELD.PASSWORD]
        }
    };
};

export default formSubmitFormat;
