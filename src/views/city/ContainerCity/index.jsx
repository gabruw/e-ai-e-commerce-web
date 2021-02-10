//#region Imports

import LocationCityIcon from '@material-ui/icons/LocationCity';
import ContentBox from 'containers/ContentBox';
import TableUI from 'containers/TableUI';
import React, { useCallback, useEffect } from 'react';
import useCityContext from 'storages/city/context';
import CITY_COLUMN from 'utils/constants/column/city';
import { deleteCity } from './../services/send-data';

//#endregion

const ContainerCity = () => {
    const { city, show, pageable, isLoading, setSelected, fetchCities } = useCityContext();

    useEffect(() => {
        fetchCities();
    }, [fetchCities]);

    const edit = useCallback(
        (id) => {
            setSelected(id);
            show();
        },
        [setSelected, show]
    );

    return (
        <ContentBox
            title='Cidades'
            onClickAdd={show}
            fetch={fetchCities}
            isLoading={isLoading}
            icon={<LocationCityIcon />}
        >
            <TableUI
                rows={city}
                onClickEdit={edit}
                pageable={pageable}
                fetch={fetchCities}
                columns={CITY_COLUMN}
                onClickRemove={deleteCity}
            />
        </ContentBox>
    );
};

export default ContainerCity;
