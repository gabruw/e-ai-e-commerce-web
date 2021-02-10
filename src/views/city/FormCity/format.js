//#region Imports

import CITY_FIELD from 'utils/constants/field/city';
import STATE_FIELD from 'utils/constants/field/state';

//#endregion

const formatDefaultValues = (values) => ({
    ...values,
    [CITY_FIELD.STATE_ID]: values[STATE_FIELD.ID]
});

export default formatDefaultValues;
