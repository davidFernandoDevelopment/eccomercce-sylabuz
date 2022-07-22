import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from './product.interface';


interface State {
    products: Product[];
    productCurrent: Product | null;
};

const initialState: State = {
    products: [],
    productCurrent: null
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state: State, action: PayloadAction<Product>) => {
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        },
        setProduct: (state: State, action: PayloadAction<Product>) => {
            return {
                ...state,
                productCurrent: action.payload
            };
        },
        deleteProduct: (state: State, action: PayloadAction<number>) => {
            const id = action.payload;

            return {
                ...state,
                products: state.products.filter(pdx => pdx.id !== id)
            };
        },
        editProduct: (state: State, action: PayloadAction<{ id: number, product: Product; }>) => {
            const { id, product } = action.payload;

            return {
                ...state,
                products: state.products.map(pdx => pdx.id === id ? product : pdx)
            };
        }
    }
});


export const { setProducts, setProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer; 