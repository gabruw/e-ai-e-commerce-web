//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import ADDRESS_FIELDS from 'utils/constants/field/address';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllAddresses } from './services/get-data';

//#endregion

const AddressContext = createContext();

const initialState = {
    [ADDRESS_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const AddressContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const { run } = useRequestState();

    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setAddress = useCallback(
        (address = null) =>
            setState((prevState) => ({
                ...prevState,
                [ADDRESS_FIELDS.THIS]: address
            })),
        [setState]
    );

    const setSelected = useCallback(
        (id) =>
            setState((prevState) => {
                const selected = id && prevState[ADDRESS_FIELDS.THIS].find((value) => value[ADDRESS_FIELDS.ID] === id);
                return {
                    ...prevState,
                    hasSelected: isPresent(selected),
                    selected: selected || initialState.selected
                };
            }),
        [setState]
    );

    const setIsLoading = useCallback(
        () =>
            setState((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading
            })),
        [setState]
    );

    const setError = useCallback(
        (error = null) =>
            setState((prevState) => ({
                ...prevState,
                error
            })),
        [setState]
    );

    const fetch = useCallback(
        async (page, order, direction) => await run(() => getAllAddresses(page, order, direction)),
        [run]
    );
    const fetchAddresses = useCallback(
        async (page, order, direction) => {
            setIsLoading();

            await fetch(page, order, direction)
                .then(({ data }) =>
                    setState((prevState) => ({
                        ...prevState,
                        [ADDRESS_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES],
                            [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: data[PAGEABLE_FIELDS.TOTAL_ELEMENTS]
                        }
                    }))
                )
                .catch((error) => setError(error))
                .finally(() => setIsLoading());
        },
        [setIsLoading, fetch, setState, setError]
    );

    return (
        <AddressContext.Provider
            value={{ show, hide, state, modalRef, setAddress, setSelected, setIsLoading, setError, fetchAddresses }}
        >
            {children}
        </AddressContext.Provider>
    );
};

const useAddressContext = () => {
    const { show, hide, state, modalRef, setAddress, setSelected, setIsLoading, setError, fetchAddresses } = useContext(
        AddressContext
    );

    return { show, hide, modalRef, setAddress, setSelected, setIsLoading, setError, fetchAddresses, ...state };
};

export default useAddressContext;
