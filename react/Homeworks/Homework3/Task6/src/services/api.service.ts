import type {ICartResponseModel} from "../models/ICartResponseModel.ts";
import type IUser from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const userService = {
    getAll: async ():Promise<IUser[]> => {
        const response = await fetch(`${baseUrl}/users`).then((response) => response.json());
        return response.users;
    }
}
export const cartsService = {
    getByUserId: async (userId: string):Promise<ICartResponseModel> => {
        return await fetch(`${baseUrl}/carts/user/${userId}`).then((response) => response.json());
    }
}