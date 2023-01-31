import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 0,
    sortType: { name: 'popularity (DESC)', sort: '-rating' },
    currentPage: 1,
    searchText: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterCategory: (state, action) => {
            state.category = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action) => {
            state.sortType = action.payload.sortObj;
            state.category = Number(action.payload.category);
            state.currentPage = Number(action.payload.currentPage);
        },
    },
});

export const filterSelector = (state) => state.filter;

// Action creators are generated for each case reducer function
export const { setFilterCategory, setSortType, setCurrentPage, setFilters, setSearchText } = filterSlice.actions;

export default filterSlice.reducer;
