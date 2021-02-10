//#region Imports

import clsx from 'clsx';
import React, { useMemo } from 'react';
import FieldAs from './FieldAs';
import FieldRender from './FieldRender';
import useStyles from './styles';
import FieldData from 'components/FieldData';

//#endregion

const FieldWrapper = ({
    as,
    name,
    label,
    render,
    errors,
    isDate,
    className,
    hasMargin,
    required = false,
    component: Component,
    ...rest
}) => {
    const styles = useStyles({ hasMargin });

    const componentClass = clsx(styles.component, className);
    const error = useMemo(() => errors && errors[name], [errors, name]);

    return (
        <div className={styles.content}>
            <div className={styles.field}>
                <div className={styles.label}>
                    {label}
                    {required && <div className={styles.required}>*</div>}
                </div>

                {isDate && <FieldData name={name} error={error} className={componentClass} {...rest} />}
                {as && <FieldAs as={as} name={name} error={error} className={componentClass} {...rest} />}

                {render && (
                    <FieldRender name={name} error={error} render={render} className={componentClass} {...rest} />
                )}
            </div>

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
};

export default FieldWrapper;
