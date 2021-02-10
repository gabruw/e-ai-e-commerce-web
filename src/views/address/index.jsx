//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment } from 'react';
import useAddressContext, { AddressContextProvider } from 'storages/address/context';
import ContainerAddress from './ContainerAddress';

//#endregion

const Address = () => (
    <AddressContextProvider>
        <AddressContent />
    </AddressContextProvider>
);

const AddressContent = () => {
    const { modalRef } = useAddressContext();

    return (
        <Fragment>
            <ContainerAddress />

            <ModalUI ref={modalRef} title='Editar cidade'>
                <Fragment></Fragment>
            </ModalUI>
        </Fragment>
    );
};

export default Address;
