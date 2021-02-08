//#region Imports

import TextField from '@material-ui/core/TextField';
import FieldWrapper from 'components/FieldWrapper';
import React, { Fragment } from 'react';
import AUTHETICATION_FIELD from 'utils/constants/field/authentication';
import AUTHETICATION_LABEL from 'utils/constants/label/authentication';

//#endregion

const AuthenticationFields = ({ errors }) => (
    <Fragment>
        <div>
            <FieldWrapper
                required
                errors={errors}
                render={TextField}
                name={AUTHETICATION_FIELD.EMAIL}
                label={AUTHETICATION_LABEL.EMAIL}
            />
        </div>

        <div>
            <FieldWrapper
                required
                type='password'
                render={TextField}
                errors={errors}
                name={AUTHETICATION_FIELD.PASSWORD}
                label={AUTHETICATION_LABEL.PASSWORD}
            />
        </div>
    </Fragment>
);

export default AuthenticationFields;
