//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import CITY_FIELDS from 'utils/constants/field/city';

//#endregion

const CityContext = createContext();

const initialState = {
    error: null,
    isLoading: false,
    [CITY_FIELDS.THIS]: null
};

export const CityContextProvider = ({ children, defaultValues }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setCity = useCallback(
        (city = null) => {
            setState((prevState) => ({
                ...prevState,
                [CITY_FIELDS.THIS]: city
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
        <CityContext.Provider value={{ show, hide, state, modalRef, setCity, setIsLoading, setError }}>
            {children}
        </CityContext.Provider>
    );
};

const useCityContext = () => {
    const { show, hide, state, modalRef, addCity, setIsLoading, setError } = useContext(CityContext);

    return { show, hide, modalRef, addCity, setIsLoading, setError, ...state };
};

export default useCityContext;
