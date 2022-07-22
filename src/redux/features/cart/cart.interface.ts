export interface Cart {
    products: ProductInCart[];
    total: number;
}

export interface ProductInCart {
    subtotal?: number;
    productId: number;
    quantity: number;
    price?: number;
    title?: string;
    image?: string;
}

export interface CartSend {
    id: number;
    userId: number;
    date: string;
    products: ProductInCart[];
}