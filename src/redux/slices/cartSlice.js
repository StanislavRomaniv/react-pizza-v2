import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, { payload }) {
            const findItem = state.items.find((obj) => obj.id === payload.id && obj.type === payload.type && obj.size === payload.size);

            if (findItem) {
                findItem.count++;
                findItem.totalItemPrice += payload.price;
            } else {
                state.items.push({ ...payload, count: 1, totalItemPrice: payload.price });
            }

            state.totalCount += 1;
            state.totalPrice += payload.price;
        },

        removeItemInCart(state, { payload }) {
            const findItem = state.items.find((obj) => {
                return obj.id === payload.id && obj.type === payload.type && obj.size === payload.size;
            });

            if (findItem.count > 1) {
                findItem.count--;
                findItem.totalItemPrice -= payload.price;
            } else {
                state.items.splice(state.items.indexOf(findItem), 1);
            }

            state.totalCount -= 1;
            state.totalPrice -= payload.price;
        },

        clearCart(state) {
            state.items = [];

            state.totalPrice = 0;
            state.totalCount = 0;
        },

        clearItem(state, { payload }) {
            const findItem = state.items.find((obj) => {
                return obj.id === payload.id && obj.type === payload.type && obj.size === payload.size;
            });

            state.totalPrice -= findItem.totalItemPrice;
            state.totalCount -= findItem.count;

            state.items.splice(state.items.indexOf(findItem), 1);
        },
    },
});

export const cartSelector = (state) => state.cart;

export const { addItemToCart, addItemInCart, removeItemInCart, clearCart, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
