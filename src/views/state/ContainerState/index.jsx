//#region Imports

import MapIcon from '@material-ui/icons/Map';
import ContentBox from 'containers/ContentBox';
import TableUI from 'containers/TableUI';
import React, { useCallback, useEffect } from 'react';
import useStateContext from 'storages/state/context';
import STATE_COLUMN from 'utils/constants/column/state';
import { deleteState } from './../services/send-data';

//#endregion

const ContainerState = () => {
    const { state, show, pageable, isLoading, setSelected, fetchStates } = useStateContext();

    useEffect(() => {
        fetchStates();
    }, [fetchStates]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <ContentBox title='Estados' fetch={fetchStates} isLoading={isLoading} onClickAdd={show} icon={<MapIcon />}>
            <TableUI
                rows={state}
                onClickEdit={edit}
                pageable={pageable}
                fetch={fetchStates}
                columns={STATE_COLUMN}
                onClickRemove={deleteState}
            />
        </ContentBox>
    );
};

export default ContainerState;
