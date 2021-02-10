//#region Imports

import CITY_FIELD from 'utils/constants/field/city';
import ADDRESS_FIELD from 'utils/constants/field/address';
import STATE_FIELD from 'utils/constants/field/state';
import CITY_LABEL from 'utils/constants/label/city';
import ADDRESS_LABEL from 'utils/constants/label/address';
import STATE_LABEL from 'utils/constants/label/state';

//#endregion

const ADDRESS_COLUMN = [
    { label: ADDRESS_LABEL.ROAD, field: ADDRESS_FIELD.ROAD },
    { label: ADDRESS_LABEL.NEIGHBORHOOD, field: ADDRESS_FIELD.NEIGHBORHOOD },
    { label: ADDRESS_LABEL.NUMBER, field: ADDRESS_FIELD.NUMBER },
    { label: CITY_LABEL.THIS, field: `${CITY_FIELD.THIS}.${CITY_FIELD.NAME}` },
    { label: STATE_LABEL.THIS, field: `${CITY_FIELD.THIS}.${STATE_FIELD.THIS}.${STATE_FIELD.NAME}` }
];

export default ADDRESS_COLUMN;
