//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    field: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ...ALIGN.LEFT
    },
    label: {
        width: '100%',
        marginBottom: 3,
        fontWeight: 'bold',
        ...ALIGN.LEFT
    },
    required: {
        color: 'red',
        marginLeft: 3
    },
    component: {
        width: '100%'
    },
    error: {
        color: 'red',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        ...ALIGN.RIGHT
    }
});

export default useStyles;
