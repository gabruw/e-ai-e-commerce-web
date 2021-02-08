//#region Imports

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useMemo } from 'react';
import FieldIcon from './FieldIcon/index';

//#endregion

const FieldSelect = ({ options = [], isLoading, ...rest }) => {
    const hasOptions = useMemo(() => options && options.length > 0, [options]);

    return (
        <Select
            displayEmpty
            disabled={isLoading || !hasOptions}
            IconComponent={(props) => <FieldIcon isLoading={isLoading} {...props} />}
            {...rest}
        >
            {hasOptions &&
                options.map((opt, index) => (
                    <MenuItem key={index} value={opt.value}>
                        {opt.text}
                    </MenuItem>
                ))}
        </Select>
    );
};

export default FieldSelect;
