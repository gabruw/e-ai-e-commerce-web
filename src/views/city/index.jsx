//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment, useMemo } from 'react';
import useCityContext, { CityContextProvider } from 'storages/city/context';
import ContainerCity from './ContainerCity';
import FormCity from './FormCity';

//#endregion

const City = () => (
    <CityContextProvider>
        <CityContent />
    </CityContextProvider>
);

const CityContent = () => {
    const { modalRef, hasSelected } = useCityContext();

    const titleModal = useMemo(() => `${hasSelected ? 'Editar' : 'Adicionar'} cidade`, [hasSelected]);

    return (
        <Fragment>
            <ContainerCity />

            <ModalUI ref={modalRef} title={titleModal}>
                <FormCity />
            </ModalUI>
        </Fragment>
    );
};

export default City;
