import type IUser from "../models/IUser.ts";
import type ICartResponseModel from "../models/ICartResponseModel.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    getAllUsers: async ():Promise<IUser[]> => {
        const response = await fetch(`${baseUrl}/users`).then(res => res.json());
        return response.users;
    }
}
export const cartsService = {
    getCartsByUser: async (userId: string):Promise<ICartResponseModel> => {
        return await fetch(`${baseUrl}/carts/user/${userId}`).then(res => res.json());
    }
}