import type TodoModel from "../models/TodoModel.ts";
import type PostModel from "../models/PostModel.ts";
import type CommentModel from "../models/CommentModel.ts";


const endpoint: string = import.meta.env.VITE_API_BASE_URL;
const endpointTodos: string = endpoint + '/todos';
const endpointPosts: string = endpoint + '/posts';
const endpointComments: string = endpoint + '/comments';


const fetchTodos = async ():Promise<TodoModel[]>=>{
    const response = await fetch(endpointTodos).then(res => res.json());
    return response.todos;
};

const fetchPosts = async ():Promise<PostModel[]>=>{
    const response = await fetch(endpointPosts).then(res => res.json());
    return response.posts;
};

const fetchComments = async ():Promise<CommentModel[]> =>{
    const response = await fetch(endpointComments).then(res => res.json());
    return response.comments;
}




export { fetchTodos, fetchPosts, fetchComments };