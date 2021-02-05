//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import STATE_FIELDS from 'utils/constants/field/state';

//#endregion

const StateContext = createContext();

const initialState = {
    error: null,
    isLoading: false,
    [STATE_FIELDS.THIS]: null
};

export const StateContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [_state, _setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setState = useCallback(
        (state = null) => {
            _setState((prevState) => ({
                ...prevState,
                [STATE_FIELDS.THIS]: state
            }));
        },
        [_setState]
    );

    const setIsLoading = useCallback(
        (isLoading = false) => {
            _setState((prevState) => ({
                ...prevState,
                isLoading
            }));
        },
        [_setState]
    );

    const setError = useCallback(
        (error = null) =>
            _setState((prevState) => ({
                ...prevState,
                error
            })),
        [_setState]
    );

    return (
        <StateContext.Provider value={{ show, hide, _state, modalRef, setState, setIsLoading, setError }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    const { show, hide, _state, modalRef, setState, setIsLoading, setError } = useContext(StateContext);

    return { show, hide, modalRef, setState, setIsLoading, setError, ..._state };
};

export default useStateContext;
