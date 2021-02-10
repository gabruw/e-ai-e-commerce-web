//#region Imports

import RoomIcon from '@material-ui/icons/Room';
import ContentBox from 'containers/ContentBox';
import TableUI from 'containers/TableUI';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import ADDRESS_COLUMN from 'utils/constants/column/address';

//#endregion

const ContainerAddress = () => {
    const { address, pageable, isLoading, fetchAddresses } = useAddressContext();

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    return (
        <ContentBox title='Endereços' fetch={fetchAddresses} isLoading={isLoading} icon={<RoomIcon />}>
            <TableUI rows={address} pageable={pageable} fetch={fetchAddresses} columns={ADDRESS_COLUMN} />
        </ContentBox>
    );
};

export default ContainerAddress;
