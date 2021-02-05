//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import ADDRESS_FIELDS from 'utils/constants/field/address';

//#endregion

const AddressContext = createContext();

const initialState = {
    error: null,
    isLoading: false,
    [ADDRESS_FIELDS.THIS]: null
};

export const AddressContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setAddress = useCallback(
        (address = null) => {
            setState((prevState) => ({
                ...prevState,
                [ADDRESS_FIELDS.THIS]: address
            }));
        },
        [setState]
    );

    const setIsLoading = useCallback(
        (isLoading = false) => {
            setState((prevState) => ({
                ...prevState,
                isLoading
            }));
        },
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

    return (
        <AddressContext.Provider value={{ show, hide, state, modalRef, setAddress, setIsLoading, setError }}>
            {children}
        </AddressContext.Provider>
    );
};

const useAddressContext = () => {
    const { show, hide, state, modalRef, setAddress, setIsLoading, setError } = useContext(AddressContext);

    return { show, hide, modalRef, setAddress, setIsLoading, setError, ...state };
};

export default useAddressContext;
