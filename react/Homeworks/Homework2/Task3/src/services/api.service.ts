import type CommentModel from "../models/CommentModel.ts";

const endpoint:string = import.meta.env.VITE_API_BASE_URL;
const endpointComments:string = endpoint + '/comments';

const fetchComments = async():Promise<CommentModel[]> => {
    return await fetch(endpointComments).then(res => res.json())
};

export { fetchComments };