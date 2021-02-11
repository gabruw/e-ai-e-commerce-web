//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ActionButtons from 'components/ActionButtons';
import MessageBox from 'components/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useClientContext from 'storages/client/context';
import useRequestState from 'utils/hooks/useRequestState';
import authenticationSchema from 'validations/schemas/authentication';
import AuthenticationFields from '../AuthenticationFields';
import { postLogin } from './../../services/send-data';

//#endregion

const FormLogin = ({ setIsLogin }) => {
    const history = useHistory();
    const { addClient } = useClientContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(authenticationSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const response = await run(() => postLogin(data));
            if (response.success) {
                addClient({ ...response.data, token: response.token });
                history.push(ROUTE_NAME.IN.HOME);
            }
        },
        [run, addClient, history]
    );

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AuthenticationFields errors={errors} />

                <MessageBox title='Erro ao efetuar login' errors={requestState.errors} />

                <ActionButtons
                    primaryText='Entrar'
                    secondaryText='Registrar-se'
                    onClick={() => setIsLogin(false)}
                    isLoading={requestState.isLoading}
                />
            </form>
        </FormProvider>
    );
};

export default FormLogin;
