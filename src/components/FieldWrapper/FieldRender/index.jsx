//#region Imports

import React from 'react';
import { Controller } from 'react-hook-form';

//#endregion

const FieldRender = ({ render: Component, name, error, className, defaultValue = '', ...rest }) => {
    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            render={(props) => (
                <Component {...props} variant='outlined' error={error} className={className} {...rest} />
            )}
        />
    );
};

export default FieldRender;
