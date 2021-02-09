//#region Imports

import ModalUI from 'containers/ModalUI';
import React, { Fragment } from 'react';
import useStateContext, { StateContextProvider } from 'storages/state/context';
import ContainerState from './ContainerState';
import useStyles from './styles';

//#endregion

const State = () => (
    <StateContextProvider>
        <StateContent />
    </StateContextProvider>
);

const StateContent = () => {
    const styles = useStyles();
    const { modalRef } = useStateContext();

    return (
        <Fragment>
            <ContainerState />

            <ModalUI ref={modalRef} title=''>
                <Fragment></Fragment>
            </ModalUI>
        </Fragment>
    );
};

export default State;
