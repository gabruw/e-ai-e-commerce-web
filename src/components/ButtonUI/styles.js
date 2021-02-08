//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import COLOR from 'utils/constants/color';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles({
    root: {
        margin: '10px 0 10px 0',
        minWidth: ({ minWidth = 240 }) => minWidth,
        color: ({ textColor = '#FFFFFF' }) => textColor,
        backgroundColor: ({ color = COLOR.BLUE.MEDIUM }) => color,
        textTransform: ({ toUpper = true }) => (toUpper ? 'uppercase' : 'lowercase'),
        '&:hover': {
            backgroundColor: ({ hoverColor = COLOR.BLUE.DARK }) => hoverColor
        },
        ...FONTS.GEOMANIST_MEDIUM
    }
});

export default useStyles;
