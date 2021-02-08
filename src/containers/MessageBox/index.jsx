//#region Imports

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import React, { Fragment, useMemo } from 'react';

//#endregion

const MessageBox = ({ errors = [], title = '', text = '', severity = 'error' }) => {
    const hasErrors = useMemo(() => errors && Array.isArray(errors) && errors.length > 0, [errors]);

    const getTitle = useMemo(() => (hasErrors && errors.length === 1 ? errors[0].title : title), [errors]);

    const hasSome = useMemo(() => hasErrors || text, [hasErrors, text]);

    return (
        <Fragment>
            {hasSome && (
                <Alert severity={severity}>
                    <AlertTitle>{getTitle}</AlertTitle>
                    {!hasErrors ? (
                        text
                    ) : (
                        <ul>
                            {errors.map((error, index) => (
                                <li key={index}>{error.text}</li>
                            ))}
                        </ul>
                    )}
                </Alert>
            )}
        </Fragment>
    );
};

export default MessageBox;
