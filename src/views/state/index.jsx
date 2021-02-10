//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment, useMemo } from 'react';
import useStateContext, { StateContextProvider } from 'storages/state/context';
import ContainerState from './ContainerState';
import FormState from './FormState';

//#endregion

const State = () => (
    <StateContextProvider>
        <StateContent />
    </StateContextProvider>
);

const StateContent = () => {
    const { modalRef, hasSelected } = useStateContext();

    const titleModal = useMemo(() => `${hasSelected ? 'Editar' : 'Adicionar'} estado`, [hasSelected]);

    return (
        <Fragment>
            <ContainerState />

            <ModalUI ref={modalRef} title={titleModal}>
                <FormState />
            </ModalUI>
        </Fragment>
    );
};

export default State;
