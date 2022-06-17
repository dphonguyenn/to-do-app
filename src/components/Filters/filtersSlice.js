import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        searchFilter: (state, action) => {
            // * update by mutation
            state.search = action.payload;
        },
        statusFilter: (state, action) => {
            state.status = action.payload;
        },
        priorityFilter: (state, action) => {
            state.priority = action.payload;
        } 
    }
})

export default filtersSlice;