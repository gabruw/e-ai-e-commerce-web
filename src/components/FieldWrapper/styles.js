//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    content: {
        width: '100%',
        flexWrap: 'wrap',
        margin: ({ hasMargin = true }) => (hasMargin ? '12px 0 12px 0' : 0),
        ...ALIGN.LEFT,
        alignItems: 'flex-start'
    },
    field: {
        width: '100%',
        flexDirection: 'column',
        ...ALIGN.LEFT,
        alignItems: 'flex-start'
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
        ...ALIGN.RIGHT,
        alignItems: 'flex-start'
    }
});

export default useStyles;
