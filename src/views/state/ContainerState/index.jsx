//#region Imports

import MapIcon from '@material-ui/icons/Map';
import ContentBox from 'containers/ContentBox';
import TableUI from 'containers/TableUI';
import React, { useEffect } from 'react';
import useStateContext from 'storages/state/context';
import STATE_COLUMN from 'utils/constants/column/state';
import { deleteState } from './../services/send-data';

//#endregion

const ContainerState = () => {
    const { state, show, pageable, isLoading, fetchStates } = useStateContext();

    useEffect(() => {
        fetchStates();
    }, [fetchStates]);

    return (
        <ContentBox title='Estados' fetch={fetchStates} isLoading={isLoading} onClickAdd={show} icon={<MapIcon />}>
            <TableUI columns={STATE_COLUMN} rows={state} pageable={pageable} fetch={fetchStates} remove={deleteState} />
        </ContentBox>
    );
};

export default ContainerState;
