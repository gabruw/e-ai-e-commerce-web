//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    form: {
        width: '100%'
    },
    actionButtons: {
        width: '97%',
        ...ALIGN.RIGHT
    }
});

export default useStyles;
