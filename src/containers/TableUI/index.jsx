//#region Imports

import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModalCrudUI from 'components/ModalCrudUI';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import useStyles from './styles';
import TableUIPagination from './TableUIPagination';

//#endregion

const TableUI = ({ columns = [], rows = [], fetch, remove, pageable }) => {
    const modalRef = useRef();
    const styles = useStyles();

    const [selectedId, setSelectedId] = useState(null);

    const handleRemove = useCallback(async () => {
        await remove(selectedId);
        fetch();
    }, [remove, selectedId, fetch]);

    const removeConfirm = useCallback(
        (id) => {
            setSelectedId(id);
            modalRef.current.show();
        },
        [modalRef, setSelectedId]
    );

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

                        <TableBody>
                            {rows &&
                                rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} hover tabIndex={-1}>
                                        {columns &&
                                            columns.map((col, colIndex) => (
                                                <TableCell key={colIndex} size='small'>
                                                    {row[col.field]}
                                                </TableCell>
                                            ))}

                                        <TableCell align='center' size='small'>
                                            <IconButton>
                                                <EditIcon className={styles.editIcon} />
                                            </IconButton>

                                            <IconButton onClick={() => removeConfirm()}>
                                                <DeleteIcon className={styles.removeIcon} />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableUIPagination pageable={pageable} />
            </Paper>
        </Fragment>
    );
};

export default TableUI;
