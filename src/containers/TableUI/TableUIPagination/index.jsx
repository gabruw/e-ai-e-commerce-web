//#region Imports

import TablePagination from '@material-ui/core/TablePagination';
import React, { useCallback } from 'react';
import PAGEABLE_FIELD from 'utils/constants/field/pageable';

//#endregion

const TableUIPagination = ({ fetch, pageable }) => {
    const handleRowsSize = useCallback(
        async (event) => {
            // TODO: Adicionar funcionalidade de mundança de número de registros requisitados
            // console.log('event.target.value', event.target.value);
            await fetch(0);
        },
        [fetch]
    );

    const handlePage = useCallback(
        async (actualPage) => {
            await fetch(actualPage);
        },
        [fetch]
    );

    return (
        <TablePagination
            component='div'
            rowsPerPageOptions={[10]}
            page={pageable[PAGEABLE_FIELD.PAGE_NUMBER]}
            count={pageable[PAGEABLE_FIELD.TOTAL_ELEMENTS]}
            rowsPerPage={pageable[PAGEABLE_FIELD.PAGE_SIZE]}
            onChangePage={(_, nextPage) => handlePage(nextPage)}
            onChangeRowsPerPage={(event) => handleRowsSize(event)}
        />
    );
};

export default TableUIPagination;
