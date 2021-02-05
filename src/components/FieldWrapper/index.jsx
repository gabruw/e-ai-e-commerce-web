//#region Imports

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

//#endregion

const FieldWrapper = ({ as: Component, name, errors, label, className, required, ...rest }) => {
    const styles = useStyles();

    const componentClass = clsx(styles.component, className);
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <div className={styles.label}>
                    {label}

                    {required && <div className={styles.required}>*</div>}
                </div>

                <Controller
                    name={name}
                    defaultValue=''
                    render={(props) => (
                        <Component
                            {...props}
                            variant='outlined'
                            error={Boolean(error)}
                            className={componentClass}
                            onChange={(event) => onFieldChange(event)}
                            {...rest}
                        />
                    )}
                />
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
