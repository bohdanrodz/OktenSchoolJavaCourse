import type IUserResponseModel from "../models/IUserResponseModel.ts";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

export const fetchUsers = async (page: string): Promise<IUserResponseModel> => {
    const limit = 30;
    const skip = limit * (Number(page)-1);
    return await fetch(baseUrl + '/users' + '?skip=' + skip).then(value => value.json());
}