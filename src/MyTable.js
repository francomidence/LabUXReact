import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class MyTable extends Component {
    constructor(props) {
        super(props);
        this.rows = props.rows;
    }

    render() {
        return(

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Clase</TableCell>
                            <TableCell align="right">1er Parcial</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.clase}
                                </TableCell>
                                <TableCell align="right">
                                    {row.nota}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        );
    }
}

export default MyTable;