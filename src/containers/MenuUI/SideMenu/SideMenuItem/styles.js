//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import FONTS from 'assets/styles/fonts';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    subheader: {
        fontSize: 16,
        color: COLOR.YELLOW.LIGHT,
        ...FONTS.GEOMANIST_MEDIUM
    },
    content: {
        color: '#FFFFFF'
    }
}));

export default useStyles;
