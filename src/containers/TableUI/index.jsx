//#region Imports

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ModalCrudUI from 'components/ModalCrudUI';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import useStyles from './styles';
import TableUIBody from './TableBody/index';
import TableUIPagination from './TableUIPagination';

//#endregion

const TableUI = ({ columns = [], rows = [], fetch, pageable, onClickEdit, onClickRemove }) => {
    const modalRef = useRef();
    const styles = useStyles();

    const [selectedId, setSelectedId] = useState(null);

    const show = useCallback(() => modalRef.current.show(), [modalRef]);

    const handleRemove = useCallback(async () => {
        await onClickRemove(selectedId);
        await fetch();
    }, [onClickRemove, selectedId, fetch]);

    return (
        <Fragment>
            <ModalCrudUI
                isRemove
                ref={modalRef}
                onConfirm={() => handleRemove()}
                onClose={() => modalRef.current.hide()}
            >
                <div className={styles.modalText}>
                    Ao confirmar a solicitação, este item será excluído. Deseja continuar?
                </div>
            </ModalCrudUI>

            <Paper className={styles.root}>
                <TableContainer className={styles.container}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns &&
                                    columns.map((col, index) => (
                                        <TableCell
                                            key={index}
                                            align={col.align || 'left'}
                                            className={styles.headerCell}
                                            style={{ minWidth: col.minWidth || '100px' }}
                                        >
                                            {col.label}
                                        </TableCell>
                                    ))}
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>

                        <TableUIBody
                            rows={rows}
                            show={show}
                            columns={columns}
                            onClickEdit={onClickEdit}
                            onClickRemove={onClickRemove}
                            setSelectedId={setSelectedId}
                        />
                    </Table>
                </TableContainer>

                <TableUIPagination fetch={fetch} pageable={pageable} />
            </Paper>
        </Fragment>
    );
};

export default TableUI;
