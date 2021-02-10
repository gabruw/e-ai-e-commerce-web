//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FormUI from 'components/FormUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useStateContext from 'storages/state/context';
import STATE_FIELD from 'utils/constants/field/state';
import useRequestState from 'utils/hooks/useRequestState';
import stateSchema from 'validations/schemas/state';
import { postState, putState } from './../services/send-data';
import StateFields from './StateFields';

//#endregion

const FormState = () => {
    const { hide, hasSelected, selected, setSelected, fetchStates } = useStateContext();

    const methods = useForm({
        defaultValues: selected,
        reValidateMode: 'onBlur',
        resolver: yupResolver(stateSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            let request = null;
            if (hasSelected) {
                request = putState;
                data = { ...data, [STATE_FIELD.ID]: selected[STATE_FIELD.ID] };
            } else {
                request = postState;
            }

            const response = await run(() => request(data));
            if (response.success) {
                await fetchStates();
                hide();
            }
        },
        [hasSelected, selected, run, fetchStates, hide]
    );

    return (
        <FormProvider {...methods}>
            <FormUI
                hide={hide}
                setSelected={setSelected}
                hasSelected={hasSelected}
                onSubmit={handleSubmit(onSubmit)}
                requestErrors={requestState.errors}
            >
                <StateFields errors={errors} />
            </FormUI>
        </FormProvider>
    );
};

export default FormState;
