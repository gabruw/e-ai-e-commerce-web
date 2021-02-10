//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import ADDRESS_FIELDS from 'utils/constants/field/address';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllAddressByCep, getAllAddresses } from './services/get-data';

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

    const setResponse = useCallback(
        (data) =>
            setState((prevState) => ({
                ...prevState,
                [ADDRESS_FIELDS.THIS]: data.content,
                [PAGEABLE_FIELDS.THIS]: {
                    ...data[PAGEABLE_FIELDS.THIS],
                    [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES],
                    [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: data[PAGEABLE_FIELDS.TOTAL_ELEMENTS]
                }
            })),
        [setState]
    );

    const fetchAllAddresses = useCallback(
        async (page, order, direction) => await run(() => getAllAddresses(page, order, direction)),
        [run]
    );
    const fetchAddresses = useCallback(
        async (page, order, direction) => {
            setIsLoading();

            await fetchAllAddresses(page, order, direction)
                .then(({ data }) => setResponse(data))
                .catch((error) => setError(error))
                .finally(() => setIsLoading());
        },
        [setIsLoading, fetchAllAddresses, setResponse, setError]
    );

    const fetchAllAddressesByCep = useCallback(
        async (page, order, direction) => await run(() => getAllAddressByCep(page, order, direction)),
        [run]
    );
    const fetchAddressesByCep = useCallback(
        async (page, order, direction) => {
            setIsLoading();

            await fetchAllAddressesByCep(page, order, direction)
                .then(({ data }) => setResponse(data))
                .catch((error) => setError(error))
                .finally(() => setIsLoading());
        },
        [setIsLoading, fetchAllAddressesByCep, setResponse, setError]
    );

    return (
        <AddressContext.Provider
            value={{ show, hide, state, modalRef, setIsLoading, setError, fetchAddresses, fetchAddressesByCep }}
        >
            {children}
        </AddressContext.Provider>
    );
};

const useAddressContext = () => {
    const { show, hide, state, modalRef, setIsLoading, setError, fetchAddresses, fetchAddressesByCep } = useContext(
        AddressContext
    );

    return { show, hide, modalRef, setIsLoading, setError, fetchAddresses, fetchAddressesByCep, ...state };
};

export default useAddressContext;
