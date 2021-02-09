//#region Imports

import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonUI from 'components/ButtonUI';
import React from 'react';
import COLOR from 'utils/constants/color';
import useStyles from './styles';

//#endregion

const ActionButtons = ({
    primaryText,
    secondaryText,
    primaryOnClick,
    secondaryOnClick,
    isLoading = false,
    primarySubmit = true,
    ...rest
}) => {
    const isLarge = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const styles = useStyles({ isLarge });

    return (
        <div className={styles.content}>
            <div className={styles.buttonContainer}>
                <ButtonUI
                    minWidth='100%'
                    isLoading={isLoading}
                    type={primarySubmit ? 'submit' : 'button'}
                    onClick={() => primaryOnClick && primaryOnClick()}
                >
                    {primaryText}
                </ButtonUI>
            </div>

            <div className={styles.buttonContainer}>
                <ButtonUI
                    minWidth='100%'
                    isLoading={isLoading}
                    color={COLOR.GRAY.MEDIUM}
                    hoverColor={COLOR.GRAY.DARK}
                    onClick={() => secondaryOnClick && secondaryOnClick()}
                    {...rest}
                >
                    {secondaryText}
                </ButtonUI>
            </div>
        </div>
    );
};

export default ActionButtons;
