//#region Imports

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

//#endregion

const FieldRadio = ({ labelA, labelB, valueA, valueB, ...rest }) => (
    <RadioGroup row {...rest}>
        <FormControlLabel value={valueA} label={labelA} control={<Radio />} />
        <FormControlLabel value={valueB} label={labelB} control={<Radio />} />
    </RadioGroup>
);

export default FieldRadio;
