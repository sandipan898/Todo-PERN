import { Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react';

const TodoForm = ({ todo, setTodo, todoId, handleSubmit }) => {

  return (
    <Paper>
        <form style={{ padding: "1rem 2rem"}} onSubmit={handleSubmit}>
            <Typography variant='h6' style={{ marginBottom: "1rem" }}>Todo Description</Typography>
            <TextField 
                id="outlined-basic" label="Outlined" variant="outlined" 
                value={todo.description} onChange={(e) => setTodo({description: e.target.value})} 
            />
            <Button variant='contained' type='submit'>Submit</Button>
        </form>
    </Paper>
  )
}

export default TodoForm