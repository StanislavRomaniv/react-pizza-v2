import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const limit = 4;
const initialState = {
    items: [],
    status: 'loading',
};

export const fetchContent = createAsyncThunk('content/fetchContentStatus', async ({ sortType, category, searchText, currentPage }) => {
    const { data } = await axios.get(
        `https://63a5e35df8f3f6d4ab02601e.mockapi.io/items?page=${currentPage}${searchText ? `&name=${searchText}` : ''}&sortBy=${sortType.sort.replace('-', '')}&order=${sortType.sort.includes('-') ? 'desc' : 'asc'}${
            category ? `&category=${category}` : ''
        }&limit=${limit}`,
    );
    return data.items;
});

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setItems: (state, { payload }) => {
            state.items = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContent.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchContent.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.items = payload;
            })
            .addCase(fetchContent.rejected, (state) => {
                state.status = 'failed';
                state.items = [];
            });
    },
});

export const contentSelector = (state) => state.content;

export const { setItems } = contentSlice.actions;

export default contentSlice.reducer;
