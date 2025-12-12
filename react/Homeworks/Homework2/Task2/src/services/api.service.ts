import type {PostModel} from "../models/PostModel.ts";

const endpoint:string = import.meta.env.VITE_API_BASE_URL;
const postsEndpoint:string = endpoint + '/posts';

const fetchPosts = async (): Promise<PostModel[]> => {
    return await fetch(postsEndpoint).then(res => res.json());
}

export {fetchPosts}