//#region Imports

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

//#endregion

const ButtonUI = ({
    color,
    toUpper,
    children,
    minWidth,
    textColor,
    startIcon,
    isLoading,
    className,
    isDisabled,
    hoverColor,
    variant = 'contained',
    ...rest
}) => {
    const styles = useStyles({ color, textColor, hoverColor, toUpper, minWidth });
    const buttonClass = clsx(styles.root, className);

    return (
        <Button
            variant={variant}
            className={buttonClass}
            disabled={isDisabled || isLoading}
            startIcon={!isLoading && startIcon}
            {...rest}
        >
            {!isLoading ? children : <CircularProgress size={22} />}
        </Button>
    );
};

export default ButtonUI;
