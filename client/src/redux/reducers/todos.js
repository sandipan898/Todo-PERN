import * as types from '../actionTypes/todoTypes';

const reducer = (todos=[], { type, payload }) => {
    switch (type) {
        case types.GET: 
            return todos.find(todo => todo.todo_id === payload.data.todo_id);

        case types.GET_ALL: 
            return payload.data

        case types.CREATE:
            return [...todos, payload.data];

        case types.UPDATE: 
            return todos.map(todo => todo.todo_id === payload.data.todo_id ? payload.data : todo);

        case types.DELETE:
            return todos.filter(todo => todo.todo_id !== payload.data.todo_id)
            
        default:
            return todos;
    }
}

export default reducer;