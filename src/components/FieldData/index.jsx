//#region Imports

import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ptBrLocale from 'date-fns/locale/pt-BR';
import React from 'react';
import { Controller } from 'react-hook-form';

//#endregion

const FieldData = ({ name, error, className, ...rest }) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBrLocale}>
        <Controller
            name={name}
            disableToolbar
            defaultValue=''
            variant='inline'
            format='dd/MM/yyyy'
            className={className}
            error={Boolean(error)}
            inputVariant='outlined'
            as={KeyboardDatePicker}
            {...rest}
        />
    </MuiPickersUtilsProvider>
);

export default FieldData;
