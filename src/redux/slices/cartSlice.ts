import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartPropsType } from '../../components/Cart/Cart';
import { RootState } from '../store';

type CartType = {
    items: CartPropsType[];
    totalCount: number;
    totalPrice: number;
};

const initialState: CartType = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, { payload }: PayloadAction<CartPropsType>) {
            const findItem = state.items.find((obj: CartPropsType) => obj.id === payload.id && obj.type === payload.type && obj.size === payload.size);

            if (findItem) {
                findItem.count++;
                findItem.totalItemPrice += payload.price;
            } else {
                state.items.push({ ...payload, count: 1, totalItemPrice: payload.price });
            }

            state.totalCount += 1;
            state.totalPrice += payload.price;
        },

        removeItemInCart(state, { payload }: PayloadAction<CartPropsType>) {
            const findItem = state.items.find((obj) => obj.id === payload.id && obj.type === payload.type && obj.size === payload.size);

            if (findItem) {
                if (findItem.count > 1) {
                    findItem.count--;
                    findItem.totalItemPrice -= payload.price;
                } else {
                    state.items.splice(state.items.indexOf(findItem), 1);
                }
            }

            state.totalCount -= 1;
            state.totalPrice -= payload.price;
        },

        clearCart(state) {
            state.items = [];

            state.totalPrice = 0;
            state.totalCount = 0;
        },

        clearItem(state, { payload }: PayloadAction<CartPropsType>) {
            const findItem = state.items.find((obj) => obj.id === payload.id && obj.type === payload.type && obj.size === payload.size);

            if (findItem) {
                state.totalPrice -= findItem.totalItemPrice;
                state.totalCount -= findItem.count;

                state.items.splice(state.items.indexOf(findItem), 1);
            }
        },
    },
});

export const cartSelector = (state: RootState) => state.cart;

export const { addItemToCart, removeItemInCart, clearCart, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
