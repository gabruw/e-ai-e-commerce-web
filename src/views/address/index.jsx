//#region Imports

import React from 'react';
import { AddressContextProvider } from 'storages/address/context';
import ContainerAddress from './ContainerAddress';

//#endregion

const Address = () => (
    <AddressContextProvider>
        <ContainerAddress />
    </AddressContextProvider>
);

export default Address;
