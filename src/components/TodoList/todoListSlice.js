import { createSlice} from '@reduxjs/toolkit';

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn JavaScript', completed: true, priority: 'High' },
        { id: 2, name: 'Learn ReactJS', completed: true, priority: 'Medium' },
        { id: 3, name: 'Learn Redux', completed: false, priority: 'Low' },
    ],
    reducers: {
        addTodoList: (state, action) => {
            state.push(action.payload);
        },
        setStatusTodo: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
})

export default todoListSlice;