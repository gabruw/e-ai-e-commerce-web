//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import FormUI from 'components/FormUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useCityContext from 'storages/city/context';
import STATE_FIELD from 'utils/constants/field/state';
import useRequestState from 'utils/hooks/useRequestState';
import citySchema from 'validations/schemas/city';
import { postCity, putCity } from '../services/send-data';
import CityFields from './CityFields';
import formatDefaultValues from './format';

//#endregion

const FormCity = () => {
    const { hide, hasSelected, selected, setSelected, fetchCities } = useCityContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(citySchema),
        defaultValues: formatDefaultValues(selected)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            let request = null;
            if (hasSelected) {
                request = putCity;
                data = { ...data, [STATE_FIELD.ID]: selected[STATE_FIELD.ID] };
            } else {
                request = postCity;
            }

            const response = await run(() => request(data));
            if (response.success) {
                await fetchCities();
                hide();
            }
        },
        [hasSelected, selected, run, fetchCities, hide]
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
                <CityFields errors={errors} />
            </FormUI>
        </FormProvider>
    );
};

export default FormCity;
