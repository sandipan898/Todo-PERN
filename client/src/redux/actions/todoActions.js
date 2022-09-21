import * as types from '../actionTypes/todoTypes';
import * as API from '../../api/api';

export const getTodo = (id) => async (dispatch) => {
    try {
        const fetchedTodo = await API.getTodo(id);
        dispatch({ type: types.GET, payload: fetchedTodo });
    } catch (error) {
        console.log(error);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const fetchedTodos = await API.getAllTodos();
        dispatch({ type: types.GET_ALL, payload: fetchedTodos });
    } catch (error) {
        console.log(error);
    }
}

export const createTodo = (todoData) => async (dispatch) => {
    try {
        const createdTodo = await API.createTodo(todoData);
        dispatch({ type: types.CREATE, payload: createdTodo });
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = (id, todoData) => async (dispatch) => {
    try {
        const updatedTodo = await API.updateTodo(id, todoData);
        dispatch({ type: types.UPDATE, payload: updatedTodo });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const deletedTodo = await API.deleteTodo(id);
        dispatch({ type: types.DELETE, payload: deletedTodo });
    } catch (error) {
        console.log(error);
    }
}