//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.BETWEEN
    },
    fieldContainer: {
        width: ({ isLarge }) => (isLarge ? '48%' : '100%')
    }
});

export default useStyles;
