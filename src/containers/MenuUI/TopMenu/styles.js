//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: COLOR.YELLOW.DARK,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: 240,
        width: `calc(100% - 240px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    mainColor: {
        color: COLOR.BLUE.DARK
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: 'none'
    },
    img: {
        width: 40,
        height: 40,
        marginRight: 8
    },
    right: {
        marginLeft: 'auto'
    }
}));

export default useStyles;
