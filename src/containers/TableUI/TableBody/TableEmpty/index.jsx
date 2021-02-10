//#region Imports

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

//#endregion

const TableEmpty = ({ columns = [] }) => {
    const styles = useStyles();

    const titleClass = clsx(styles.content, styles.title);

    return (
        <TableRow>
            <TableCell colSpan={columns.length + 1}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <SearchIcon className={styles.icon} color='primary' />
                    </div>

                    <div className={titleClass}>
                        <Typography variant='h4' color='secondary'>
                            Nenhum resultado foi encontrado
                        </Typography>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TableEmpty;
