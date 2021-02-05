//#region Imports

import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import SettingsIcon from '@material-ui/icons/Settings';
import ROUTE_NAME from 'routes/route-name';
import AUTHENTICATION_TYPE from 'utils/constants/types/authetication';

//#endregion

const SIDEMENU_OPTIONS = {
    TOP: [
        {
            text: 'Principal',
            icon: HomeIcon,
            path: ROUTE_NAME.IN.HOME,
            auth: AUTHENTICATION_TYPE.ANY
        },
        {
            text: 'Estados',
            icon: MapIcon,
            path: ROUTE_NAME.IN.STATE,
            auth: AUTHENTICATION_TYPE.ADMIN
        },
        {
            text: 'Cidades',
            icon: LocationCityIcon,
            path: ROUTE_NAME.IN.CITY,
            auth: AUTHENTICATION_TYPE.ADMIN
        },
        {
            text: 'Endereços',
            icon: RoomIcon,
            path: ROUTE_NAME.IN.ADDRESS,
            auth: AUTHENTICATION_TYPE.ADMIN
        }
    ],
    BOTTOM: [
        {
            text: 'Configurações',
            icon: SettingsIcon,
            path: ROUTE_NAME.OUT.ERROR,
            auth: AUTHENTICATION_TYPE.ANY
        }
    ]
};

export default SIDEMENU_OPTIONS;
