import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice.js';
import todoListSlice from '../components/TodoList/todoListSlice.js';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    },
})

export default store;