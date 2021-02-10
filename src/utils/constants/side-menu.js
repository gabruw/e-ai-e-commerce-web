//#region Imports

import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import ROUTE_NAME from 'routes/route-name';
import SIDE_MENU_TYPE from 'utils/constants/type/side-menu';

//#endregion

const { MANAGEMENT } = SIDE_MENU_TYPE;

const SIDEMENU_OPTIONS = {
    [MANAGEMENT]: [
        {
            text: 'Principal',
            icon: HomeIcon,
            path: ROUTE_NAME.IN.HOME
        },
        {
            text: 'Estados',
            icon: MapIcon,
            path: ROUTE_NAME.IN.STATE
        },
        {
            text: 'Cidades',
            icon: LocationCityIcon,
            path: ROUTE_NAME.IN.CITY
        },
        {
            text: 'Endereços',
            icon: RoomIcon,
            path: ROUTE_NAME.IN.ADDRESS
        }
    ]
};

export default SIDEMENU_OPTIONS;
