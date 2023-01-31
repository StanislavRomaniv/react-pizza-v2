import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import contentReducer from './slices/contentSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        content: contentReducer,
        cart: cartReducer,
    }
});