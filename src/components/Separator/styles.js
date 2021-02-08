//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles({
    container: {
        ...ALIGN.LEFT
    },
    typography: {
        marginBottom: 8,
        fontSize: ({ textSize }) => textSize,
        color: ({ textColor = '#000000' }) => textColor
    }
});

export const useClasses = makeStyles({
    divider: {
        background: ({ lineColor = COLOR.GRAY.LIGHTEST }) => lineColor
    }
});

export default useStyles;
