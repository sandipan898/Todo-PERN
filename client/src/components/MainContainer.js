import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, getAllTodos, getTodo } from "../redux/actions/todoActions";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

const initialTodo = {
    description: ''
};

const MainContainer = () => {
    const [todo, setTodo] = useState(initialTodo);
  const [todoId, setTodoId] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // create todo call
    dispatch(createTodo(todo));
  };

  useEffect(() => {
    if(todoId) {
      // get todo call
        dispatch(getTodo(todoId));
    } else {
        dispatch(getAllTodos())
    }
  }, [todoId])
  


  return (
    <div style={{ margin: "2rem" }}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <TodoTable todoId={todoId} setTodoId={setTodoId} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TodoForm handleSubmit={handleSubmit} todoId={todoId} todo={todo} setTodo={setTodo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContainer;
