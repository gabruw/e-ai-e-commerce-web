//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        backgroundColor: COLOR.YELLOW.LIGHTEST,
        backgroundImage: `linear-gradient(315deg, ${COLOR.YELLOW.LIGHTEST} 0%, ${COLOR.BLUE.DARKEST} 74%)`,
        ...ALIGN.CENTER
    },
    paper: {
        margin: 50,
        width: ({ isLarge }) => (isLarge ? 550 : 350)
    },
    content: {
        margin: 50
    },
    imgContainer: {
        marginBottom: 30,
        ...ALIGN.CENTER
    },
    img: {
        width: 140,
        height: 140
    },
    spacing: {
        marginBottom: 25,
        ...ALIGN.CENTER
    }
});

export default useStyles;
