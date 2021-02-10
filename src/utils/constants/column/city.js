//#region Imports

import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';
import CITY_LABEL from 'utils/constants/label/city';
import STATE_LABEL from 'utils/constants/label/state';

//#endregion

const CITY_COLUMN = [
    { label: CITY_LABEL.THIS, field: CITY_FIELD.NAME },
    { label: STATE_LABEL.THIS, field: `${STATE_FIELD.THIS}.${STATE_FIELD.NAME}` },
    { label: STATE_LABEL.COUNTRY, field: `${STATE_FIELD.THIS}.${STATE_FIELD.COUNTRY}` }
];

export default CITY_COLUMN;
