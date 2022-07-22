import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import cartReducer from './features/cart/cartSlice';
import uiReducer from './features/ui/uiSlice';
import authReducer from './features/user/userSlice';
import productReducer from './features/products/productsSyncSlice';


const store = configureStore({
    reducer: {
        ui: uiReducer,
        auth: authReducer,
        cart: cartReducer,
        products: productReducer,
    }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;

