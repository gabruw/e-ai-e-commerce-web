//#region Imports

import IconButton from '@material-ui/core/IconButton';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useCallback } from 'react';
import useStyles from './styles';
import TableEmpty from './TableEmpty';

//#endregion

const TableUIBody = ({ columns = [], rows = [], show, setSelectedId, onClickEdit, onClickRemove }) => {
    const styles = useStyles();

    const confirmRemove = useCallback(
        (id) => {
            setSelectedId(id);
            show();
        },
        [setSelectedId, show]
    );

    return (
        <TableBody>
            {rows && rows.length > 0 ? (
                rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} hover tabIndex={-1}>
                        {columns &&
                            columns.map((col, colIndex) => (
                                <TableCell key={colIndex} size='small'>
                                    {eval(`row.${col.field}`)}
                                </TableCell>
                            ))}

                        {(onClickEdit || onClickRemove) && (
                            <TableCell align='center' size='small'>
                                {onClickEdit && (
                                    <IconButton onClick={() => onClickEdit(row.id)}>
                                        <EditIcon className={styles.editIcon} />
                                    </IconButton>
                                )}

                                {onClickRemove && (
                                    <IconButton onClick={() => confirmRemove(row.id)}>
                                        <DeleteIcon className={styles.removeIcon} />
                                    </IconButton>
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                ))
            ) : (
                <TableEmpty columns={columns} />
            )}
        </TableBody>
    );
};

export default TableUIBody;
