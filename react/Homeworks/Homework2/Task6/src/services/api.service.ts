import type ProductModel from "../models/ProductModel.ts";

const endpoint: string = import.meta.env.VITE_API_BASE_URL;
const endpointProducts: string = endpoint + '/products';

const fetchProducts = async ():Promise<ProductModel[]> => {
    const response = await fetch(endpointProducts).then((response) => response.json());
    return response.products;
}

export { fetchProducts };