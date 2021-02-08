//#region Imports

import React from 'react';
import { Controller } from 'react-hook-form';

//#endregion

const FieldAs = ({ as, name, error, className, defaultValue = '', ...rest }) => (
    <Controller as={as} name={name} error={error} className={className} defaultValue={defaultValue} {...rest} />
);

export default FieldAs;
