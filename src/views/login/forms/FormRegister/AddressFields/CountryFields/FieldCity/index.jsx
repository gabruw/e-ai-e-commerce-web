//#region Imports

import FieldSelect from 'components/FieldSelect';
import React, { useCallback, useEffect, useState } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { getCityOptions } from 'views/login/services/get-data';

//#endregion

const FieldCity = ({ idState, ...rest }) => {
    const [cities, setCities] = useState([]);

    const { run, requestState } = useRequestState();
    const fetchCities = useCallback(
        async () => await run(() => getCityOptions(idState)).then((response) => setCities(response.data)),
        [run, idState]
    );

    useEffect(() => {
        if (idState) {
            fetchCities();
        }
    }, [idState, fetchCities]);

    return <FieldSelect options={cities} isLoading={requestState.isLoading} {...rest} />;
};

export default FieldCity;
