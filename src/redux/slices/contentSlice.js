import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    }
})

export const { setItems } = contentSlice.actions;

export default contentSlice.reducer;