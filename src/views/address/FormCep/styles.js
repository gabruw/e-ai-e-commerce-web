//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    form: {
        width: '100%',
        marginBottom: '25px'
    },
    content: {
        flexWrap: 'wrap',
        ...ALIGN.RIGHT,
        alignItems: 'flex-start'
    },
    container: {
        width: '300px',
        ...ALIGN.BETWEEN,
        alignItems: 'flex-start'
    },
    fieldContainer: {
        width: '60%'
    },
    button: {
        margin: '5px 0 0 0'
    }
});

export default useStyles;
