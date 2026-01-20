import type { ICart } from "./ICart";

export default interface ICartResponseModel {
   carts: ICart[];
   total: number;
   skip: number;
   limit: number;
}

export interface Products {
   id: number;
   title: string;
   price: number;
   quantity: number;
   total: number;
   discountPercentage: number;
   discountedTotal: number;
   thumbnail: string;
}