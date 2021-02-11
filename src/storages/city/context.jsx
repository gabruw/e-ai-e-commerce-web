//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CONTEXT_INITIAL_STATE from 'utils/constants/context-initial-state';
import CITY_FIELDS from 'utils/constants/field/city';
import PAGEABLE_FIELDS from 'utils/constants/field/pageable';
import isPresent from 'utils/functions/isPresent';
import useRequestState from 'utils/hooks/useRequestState';
import { getAllCities } from './services/get-data';

//#endregion

const CityContext = createContext();

const initialState = {
    [CITY_FIELDS.THIS]: null,
    ...CONTEXT_INITIAL_STATE
};

export const CityContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const { run } = useRequestState();

    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setSelected = useCallback(
        (id) =>
            setState((prevState) => {
                const selected = id && prevState[CITY_FIELDS.THIS].find((value) => value[CITY_FIELDS.ID] === id);
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

    const fetch = useCallback(async (page, order, direction) => await run(() => getAllCities(page, order, direction)), [
        run
    ]);
    const fetchCities = useCallback(
        async (page, order, direction) => {
            setIsLoading();

            await fetch(page, order, direction)
                .then(({ data }) =>
                    setState((prevState) => ({
                        ...prevState,
                        [CITY_FIELDS.THIS]: data.content,
                        [PAGEABLE_FIELDS.THIS]: {
                            ...data[PAGEABLE_FIELDS.THIS],
                            [PAGEABLE_FIELDS.TOTAL_PAGES]: data[PAGEABLE_FIELDS.TOTAL_PAGES],
                            [PAGEABLE_FIELDS.TOTAL_ELEMENTS]: data[PAGEABLE_FIELDS.TOTAL_ELEMENTS]
                        }
                    }))
                )
                .finally(() => setIsLoading());
        },
        [setIsLoading, fetch, setState]
    );

    return (
        <CityContext.Provider value={{ show, hide, state, modalRef, setSelected, setIsLoading, fetchCities }}>
            {children}
        </CityContext.Provider>
    );
};

const useCityContext = () => {
    const { show, hide, state, modalRef, setSelected, setIsLoading, fetchCities } = useContext(CityContext);

    return { show, hide, modalRef, setSelected, setIsLoading, fetchCities, ...state };
};

export default useCityContext;
