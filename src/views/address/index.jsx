//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment } from 'react';
import useAddressContext, { AddressContextProvider } from 'storages/address/context';
import useStyles from './styles';

//#endregion

const Address = () => (
    <AddressContextProvider>
        <AddressContent />
    </AddressContextProvider>
);

const AddressContent = () => {
    const styles = useStyles();
    const { modalRef } = useAddressContext();

    return (
        <Fragment>
            <ModalUI ref={modalRef} title=''>
                <Fragment></Fragment>
            </ModalUI>
        </Fragment>
    );
};

export default Address;
