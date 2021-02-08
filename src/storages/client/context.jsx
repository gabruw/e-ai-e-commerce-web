//#region Imports

import { createContext, useCallback, useContext, useState } from 'react';
import secureStorage from 'storages/security/storage';
import CLIENT_FIELDS from 'utils/constants/field/client';

//#endregion

const ClientContext = createContext();

const initialState = {
    [CLIENT_FIELDS.THIS]: null
};

export const ClientContextProvider = ({ children, defaultValues }) => {
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const addClient = useCallback(
        (client) => {
            secureStorage.setItem(CLIENT_FIELDS.THIS, client);
            setState((prevState) => ({
                ...prevState,
                [CLIENT_FIELDS.THIS]: client
            }));
        },
        [setState]
    );

    const removeClient = useCallback(() => {
        secureStorage.removeItem(CLIENT_FIELDS.THIS);
        setState((prevState) => ({
            ...prevState,
            [CLIENT_FIELDS.THIS]: initialState[CLIENT_FIELDS.THIS]
        }));
    }, [setState]);

    return <ClientContext.Provider value={{ addClient, removeClient, state }}>{children}</ClientContext.Provider>;
};

const useClientContext = () => {
    const { addClient, removeClient, state } = useContext(ClientContext);

    return { addClient, removeClient, ...state };
};

export default useClientContext;
