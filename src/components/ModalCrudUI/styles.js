//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        flexWrap: 'wrap',
        ...ALIGN.CENTER
    },
    children: {
        width: '100%'
    },
    actionButtons: {
        width: '100%',
        margin: '20px 20px 0 20px',
        ...ALIGN.RIGHT
    }
});

export default useStyles;
