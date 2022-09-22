import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react';

const TodoForm = ({ todo, setTodo, handleSubmit }) => {

  return (
    <Paper elevation={2}>
        <form style={{ padding: "1rem 2rem"}} onSubmit={handleSubmit}>
            <Typography variant='h6' style={{ marginBottom: "1rem" }} align="center">Create Your Todo</Typography>
            <hr />
            <Typography variant='body2' style={{ marginBottom: "1rem" }}>Todo Description</Typography>
            <TextField 
                id="outlined-basic" label="Outlined" variant="outlined" 
                value={todo.description} onChange={(e) => setTodo({description: e.target.value})} 
            /><br />
            <Button sx={{ marginTop: "1rem" }} variant='contained' type='submit'>Submit</Button>
        </form>
    </Paper>
  )
}

export default TodoForm