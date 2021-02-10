//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    container: {
        width: '100%',
        margin: '40px 0'
    },
    content: {
        ...ALIGN.CENTER
    },
    icon: {
        fontSize: 140
    },
    title: {
        margin: '10px 0 0 15px'
    }
});

export default useStyles;
