import axios from 'axios';      // necessary imports
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {ProductsResponseModelType} from "../models/ProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {      // create type for login data
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({        // create axios instance to fetch the data from API
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use(     // set interceptors
    (requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {    // check if method is GET type
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken // pass access token to headers
    }
    return requestObject; // return request object with access token
})


export const login = async (    // create login function
    {username, password, expiresInMins}: LoginData  // pass destructured field of LoginData-type object to the function
): Promise<IUserWithTokens> => {    // return the promise that resolves to IUserWithTokens

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>(   // send login request
        '/login', {username, password, expiresInMins}
    );
    console.log(userWithTokens);    // log the response for debugging
    localStorage.setItem('user', JSON.stringify(userWithTokens));   // save auth data in local storage
    return userWithTokens;  // return user and tokens to the caller
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {  // create function for loading products
    const {data: {products}} = await axiosInstance.get<ProductsResponseModelType>('/products'); // send GET request to fetch products
    return products     // return response
}


export const refresh = async () => {    // create function for refreshing token
    const iUserWithTokens = retrieveLocalStorage<IUserWithTokens>('user');  // retrieve user with tokens from local storage
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {  // send request to get new tokens
        refreshToken: iUserWithTokens.refreshToken,     // use current refresh token to get new tokens
        expiresInMin: 1
    });
    iUserWithTokens.accessToken = accessToken;  // set new access token to user
    iUserWithTokens.refreshToken = refreshToken;    // set new refresh token to user
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));  // send user with new tokens to local storage


}