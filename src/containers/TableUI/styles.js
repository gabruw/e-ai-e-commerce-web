//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import COLOR from 'utils/constants/color';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: '80vh'
    },
    headerCell: {
        fontSize: '16px',
        ...FONTS.GEOMANIST_MEDIUM
    },
    editIcon: {
        color: COLOR.BLUE.DARK
    },
    removeIcon: {
        color: '#CC0000'
    }
});

export default useStyles;
