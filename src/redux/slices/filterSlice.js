import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 0,
    sortType: {name: "popularity (DESC)", sort: "-rating"},
    currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterCategory: (state, action) => {
      state.category = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setFilterCategory, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;