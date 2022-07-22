export type Category = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export interface Product {
    id: number;
    price: number;
    image: string;
    title: string;
    category: Category;
    description: string;
}