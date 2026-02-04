import type { IProduct } from "./IProduct";     // import assistive interface

export type ProductsResponseModelType = {   // interface for base response from API
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}