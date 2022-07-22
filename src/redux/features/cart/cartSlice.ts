import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { ProductInCart, Cart } from './cart.interface';


type State = Cart;

const initialState: State = {
    products: [],
    total: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeProductInCart: (state: Cart, action: PayloadAction<ProductInCart>) => {
            const { productId, quantity } = action.payload;
            let subtotal = 0;
            let existProductInCart = state.products.find((p: ProductInCart) => p.productId === productId);

            if (existProductInCart) {
                const { subtotal: sb, price, productId } = existProductInCart;
                let totalPrev = state.products
                    .filter(prev => prev.productId !== productId)
                    .map(prev => prev.subtotal)
                    .reduce((prev, current) => {
                        return prev! + current!;
                    }, 0);

                subtotal = sb! + price! * quantity;

                return {
                    total: subtotal + totalPrev!,
                    products: state.products.map((p: ProductInCart) =>
                        p.productId === productId ? {
                            ...p,
                            quantity: p.quantity + quantity,
                            subtotal
                        } : p
                    )
                };
            } else {
                let total = state.products.length > 0 ?
                    state.total + action.payload.price! :
                    action.payload.price || 0;

                return {
                    total,
                    products: [
                        ...state.products,
                        {
                            ...action.payload,
                            productId,
                            quantity: 1,
                            subtotal: action.payload.price
                        }
                    ]
                };
            }
        },
        deleteProductInCart: (state: Cart, action: PayloadAction<number>) => {
            const productId = action.payload;

            let products = state.products
                .filter(prev => prev.productId !== productId);
            let total = products
                .map(prev => prev.subtotal)
                .reduce((prev, current) => {
                    return prev! + current!;
                }, 0) || 0;

            return {
                total,
                products: [...products]
            };
        }
    }
});


export const { changeProductInCart, deleteProductInCart } = cartSlice.actions;
export default cartSlice.reducer; 