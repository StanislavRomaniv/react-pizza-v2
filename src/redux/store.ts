import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import contentReducer from './slices/contentSlice';
import cartReducer from './slices/cartSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        content: contentReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
