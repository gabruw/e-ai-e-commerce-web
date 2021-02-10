//#region Imports

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';
import isOutRoute from 'utils/functions/isOutRoute';

//#endregion

const useCheckCredentials = () => {
    const history = useHistory();
    const { client } = useClientContext();

    const canEnter = useCallback(() => {
        const isOut = isOutRoute();
        if (isOut || (!isOut && client)) {
            return true;
        }

        history.push({ pathname: ROUTE_NAME.OUT.ERROR, search: '?type=401' });
        return false;
    }, [client, history]);

    return { canEnter };
};

export default useCheckCredentials;
