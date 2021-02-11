//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import STATE_FIELDS from 'utils/constants/field/state';
import isPresent from 'utils/functions/isPresent';
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

    const setSelected = useCallback(
        (id) =>
            _setState((prevState) => {
                const selected = id && prevState[STATE_FIELDS.THIS].find((value) => value[STATE_FIELDS.ID] === id);
                return {
                    ...prevState,
                    hasSelected: isPresent(selected),
                    selected: selected || initialState.selected
                };
            }),
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

    const fetch = useCallback(async (page, order, direction) => await run(() => getAllStates(page, order, direction)), [
        run
    ]);
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
                .finally(() => setIsLoading());
        },
        [setIsLoading, fetch, _setState]
    );

    return (
        <StateContext.Provider value={{ show, hide, _state, modalRef, setSelected, setIsLoading, fetchStates }}>
            {children}
        </StateContext.Provider>
    );
};

const useStateContext = () => {
    const { show, hide, _state, modalRef, setSelected, setIsLoading, fetchStates } = useContext(StateContext);

    return { show, hide, modalRef, setSelected, setIsLoading, fetchStates, ..._state };
};

export default useStateContext;
