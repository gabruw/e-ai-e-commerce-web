//#region Imports

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';
import verifyRoute from 'utils/functions/verifyRoute';

//#endregion

const useCheckCredentials = () => {
    const history = useHistory();
    const { client } = useClientContext();

    const canEnter = useCallback(() => {
        const isntSystemRoute = verifyRoute();
        if (isntSystemRoute || (!isntSystemRoute && client)) {
            return true;
        }

        history.push(ROUTE_NAME.OUT.ERROR);
        return false;
    }, [client, history]);

    return { canEnter };
};

export default useCheckCredentials;
