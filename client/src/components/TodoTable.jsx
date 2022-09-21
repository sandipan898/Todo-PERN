import React from 'react'
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

const TodoTable = ({ rows }) => {
    const todos = useSelector(state => state.todos);
    return (
        <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task Id</TableCell>
                        <TableCell align="left">Task Description</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row.todo_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" size="large">
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="large">
                                    <EditIcon fontSize="inherit" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TodoTable