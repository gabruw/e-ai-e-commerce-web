//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import ActionButtons from 'components/ActionButtons';
import Separator from 'components/Separator';
import MessageBox from 'components/MessageBox';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import COLOR from 'utils/constants/color';
import useRequestState from 'utils/hooks/useRequestState';
import AuthenticationFields from '../AuthenticationFields';
import { postIncludeClient } from './../../services/send-data';
import AddressFields from './AddressFields';
import ClientFields from './ClientFields';
import formSubmitFormat from './format';
import registerSchema from './schema';

//#endregion

const FormRegister = ({ setIsLogin }) => {
    const history = useHistory();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(registerSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            data = formSubmitFormat(data);

            const response = await run(() => postIncludeClient(data));
            if (response.success) {
                history.push(ROUTE_NAME.OUT.LOGIN);
            }
        },
        [run, history]
    );

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: 20 }}></div>
                <Separator variant='h4' textColor={COLOR.YELLOW.DARK}>
                    Dados pessoais
                </Separator>
                <ClientFields errors={errors} />

                <Separator variant='h4' textColor={COLOR.BLUE.DARK}>
                    Dados da autenticação
                </Separator>
                <AuthenticationFields errors={errors} />

                <Separator variant='h4' textColor={COLOR.YELLOW.DARK}>
                    Dados do endereço
                </Separator>
                <AddressFields errors={errors} />

                <MessageBox title='Erro ao se registrar' errors={requestState.errors} />

                <ActionButtons
                    primaryText='Confirmar'
                    secondaryText='Voltar'
                    onClick={() => setIsLogin(true)}
                    isLoading={requestState.isLoading}
                />
            </form>
        </FormProvider>
    );
};

export default FormRegister;
