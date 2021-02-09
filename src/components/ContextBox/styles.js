//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles({
    icon: {
        marginRight: '5px',
        color: COLOR.BLUE.MEDIUM
    },
    paper: {
        padding: 20
    },
    title: {
        marginBottom: 5,
        ...ALIGN.LEFT
    },
    content: {
        marginTop: 30
    }
});

export const useClasses = makeStyles({
    divider: {
        height: 2,
        background: COLOR.GRAY.DARK
    }
});

export default useStyles;
