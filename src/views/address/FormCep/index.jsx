//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import SearchIcon from '@material-ui/icons/Search';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useAddressContext from 'storages/address/context';
import ADDRESS_FIELD from 'utils/constants/field/address';
import useRequestState from 'utils/hooks/useRequestState';
import cepSchema from 'validations/schemas/cep';
import CepFields from './CepFields';
import useStyles from './styles';

//#endregion

const FormCep = () => {
    const styles = useStyles();
    const { isLoading, fetchAddressesByCep } = useAddressContext();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(cepSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run, requestState } = useRequestState();
    const onSubmit = useCallback(async (data) => await run(() => fetchAddressesByCep(data[ADDRESS_FIELD.CEP])), [
        run,
        fetchAddressesByCep
    ]);

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <div className={styles.fieldContainer}>
                            <CepFields errors={errors} />
                        </div>

                        <ButtonUI
                            type='submit'
                            minWidth='40px'
                            className={styles.button}
                            startIcon={<SearchIcon />}
                            isLoading={requestState.isLoading || isLoading}
                        >
                            Buscar
                        </ButtonUI>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default FormCep;
