//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment } from 'react';
import useCityContext, { CityContextProvider } from 'storages/city/context';

//#endregion

const City = () => (
    <CityContextProvider>
        <CityContent />
    </CityContextProvider>
);

const CityContent = () => {
    const { modalRef } = useCityContext();

    return (
        <Fragment>
            <ModalUI ref={modalRef} title=''>
                <Fragment></Fragment>
            </ModalUI>
        </Fragment>
    );
};

export default City;
