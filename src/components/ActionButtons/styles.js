//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        ...ALIGN.BETWEEN
    },
    buttonContainer: {
        width: ({ isLarge }) => (isLarge ? '48%' : '100%')
    }
});

export default useStyles;
