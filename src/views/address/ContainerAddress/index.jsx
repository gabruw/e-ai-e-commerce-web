//#region Imports

import RoomIcon from '@material-ui/icons/Room';
import ContentBox from 'containers/ContentBox';
import TableUI from 'containers/TableUI';
import React, { useEffect } from 'react';
import useAddressContext from 'storages/address/context';
import ADDRESS_COLUMN from 'utils/constants/column/address';
import FormCep from './../FormCep';

//#endregion

const ContainerAddress = () => {
    const { address, pageable, isLoading, fetchAddresses } = useAddressContext();

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    return (
        <ContentBox
            title='Endereços'
            icon={<RoomIcon />}
            isLoading={isLoading}
            fetch={fetchAddresses}
            rightContent={<FormCep />}
        >
            <TableUI rows={address} pageable={pageable} fetch={fetchAddresses} columns={ADDRESS_COLUMN} />
        </ContentBox>
    );
};

export default ContainerAddress;
