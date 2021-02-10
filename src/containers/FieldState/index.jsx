//#region Imports

import FieldSelect from 'components/FieldSelect';
import React, { useCallback, useEffect, useState } from 'react';
import useRequestState from 'utils/hooks/useRequestState';
import { getStateOptions } from 'views/login/services/get-data';

//#endregion

const FieldState = (props) => {
    const [states, setStates] = useState([]);

    const { run, requestState } = useRequestState();
    const fetchStates = useCallback(
        async () => await run(() => getStateOptions()).then((response) => setStates(response.data)),
        [run]
    );

    useEffect(() => {
        fetchStates();
    }, [fetchStates]);

    return <FieldSelect options={states} isLoading={requestState.isLoading} {...props} />;
};

export default FieldState;
