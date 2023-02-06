import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SortType {
    name: string;
    sort: string;
}

export type FiltersType = {
    category: number;
    sortType: SortType;
    currentPage: number;
    searchText: string;
};

const initialState: FiltersType = {
    category: 0,
    sortType: { name: 'popularity (DESC)', sort: '-rating' },
    currentPage: 1,
    searchText: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload;
        },
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        setSortType: (state, action: PayloadAction<SortType>) => {
            state.sortType = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action: PayloadAction<FiltersType>) => {
            state.sortType = action.payload.sortType;
            state.category = Number(action.payload.category);
            state.currentPage = Number(action.payload.currentPage);
        },
    },
});

export const filterSelector = (state: RootState) => state.filter;

// Action creators are generated for each case reducer function
export const { setFilterCategory, setSortType, setCurrentPage, setFilters, setSearchText } = filterSlice.actions;

export default filterSlice.reducer;
