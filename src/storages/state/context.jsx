//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import STATE_FIELDS from 'utils/constants/field/state';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllStates } from './services/get-data';

//#endregion

const StateContext = createContext();

const initialState = {
    [STATE_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const StateContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const { run } = useRequestState();

    const [_state, _setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setState = useCallback(
        (state = null) =>
            _setState((prevState) => ({
                ...prevState,
                [STATE_FIELDS.THIS]: state
            })),
        [_setState]
    );

    const setSelect = useCallback(
        (id) =>
            _setState((prevState) => ({
                ...prevState,
                selected: prevState[STATE_FIELDS.THIS].find((value) => value[STATE_FIELDS.ID] === id)
            })),
        [_setState]
    );

    const setIsLoading = useCallback(
        () =>
            _setState((prevState) => ({
                ...prevState,
                isLoading: !prevState.isLoading
            })),
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

    const fetch = useCallback(async () => await run(() => getAllStates()), [run]);
    const fetchStates = useCallback(
        async (page, order, direction) => {
            setIsLoading();

            await fetch(page, order, direction)
                .then(({ data }) =>
                    _setState((prevState) => ({
                        ...prevState,
                        [STATE_FIELDS.THIS]: data.content,
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
        [setIsLoading, fetch, _setState, setError]
    );

    return (
        <StateContext.Provider
            value={{ show, hide, _state, modalRef, setState, setSelect, setIsLoading, setError, fetchStates }}
        >
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    const { show, hide, _state, modalRef, setState, setSelect, setIsLoading, setError, fetchStates } = useContext(
        StateContext
    );

    return { show, hide, modalRef, setState, setSelect, setIsLoading, setError, fetchStates, ..._state };
};

export default useStateContext;
