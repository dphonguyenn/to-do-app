// * selector.js --> nơi tạo ra kho state của store

import { createSelector } from '@reduxjs/toolkit';

export const textSearchSelector = (state) => state.filters.search;

export const statusFilterSelector = (state) => state.filters.status;

export const priorityFilterSelector = (state) => state.filters.priority;

export const todoListSelector = (state) => state.todoList;

// * createSelector giúp tạo ra 1 selector có sự phụ thuộc từ các selector khác
// todo: createSelector(_ds_selector_phuthuoc, _func_create_selector)
export const todoListFilterSelector = createSelector(
    // các selector cần phụ thuộc 
    textSearchSelector,
    statusFilterSelector,
    priorityFilterSelector,
    todoListSelector,
    // hàm tạo selector(_thamso...) vs tham số tương ứng với các selector phụ thuộc    
    (textSearch, status, priority, todoList) => {   
        return todoList.filter(todo => {
            if (status === 'All') {
                return priority.length > 0 ?
                    todo.name.includes(textSearch) && priority.includes(todo.priority)
                    : todo.name.includes(textSearch);
            }

            return todo.name.includes(textSearch) && 
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length > 0 ? priority.includes(todo.priority) : true)
        })
    }
);