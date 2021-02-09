//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles({
    content: {
        flexWrap: 'wrap',
        minHeight: '100vh',
        padding: '0 10px 0 10px',
        backgroundColor: '#DBF8F3',
        ...ALIGN.CENTER
    },
    container: {
        flexWrap: 'wrap',
        ...ALIGN.BETWEEN
    },
    imgContainer: {
        justifyContent: 'flex-start',
        width: ({ isLarge }) => (isLarge ? '40%' : '100%'),
        ...ALIGN.CENTER
    },
    img: {
        width: '100%',
        height: 'auto'
    },
    textContainer: {
        flexDirection: 'column',
        width: ({ isLarge }) => (isLarge ? '50%' : '100%'),
        ...ALIGN.CENTER,
        alignItems: ({ isLarge }) => (isLarge ? 'flex-start' : 'center')
    },
    evidence: {
        marginBottom: '20px'
    },
    evidenceText: {
        color: COLOR.BLUE.MEDIUM,
        fontSize: ({ isLarge }) => (isLarge ? '3vw' : '7vw'),
        ...FONTS.GEOMANIST_MEDIUM
    },
    information: {
        marginBottom: '30px'
    },
    errorRow: {
        ...ALIGN.LEFT
    },
    informationText: {
        color: COLOR.GRAY.MEDIUM,
        fontSize: ({ isLarge }) => (isLarge ? '2vw' : '6vw'),
        ...FONTS.GEOMANIST_MEDIUM
    },
    code: {
        color: '#FA2F51',
        margin: '0 10px 0 10px',
        fontSize: ({ isLarge }) => (isLarge ? '2vw' : '6vw'),
        ...FONTS.GEOMANIST_MEDIUM
    },
    explanation: {
        fontSize: ({ isLarge }) => (isLarge ? '1.5vw' : '5vw'),
        color: COLOR.GRAY.MEDIUM,
        ...FONTS.GEOMANIST_MEDIUM
    },
    goBackButton: {
        width: '100%',
        ...ALIGN.CENTER,
        justifyContent: ({ isLarge }) => (isLarge ? 'flex-start' : 'center')
    }
});

export default useStyles;
