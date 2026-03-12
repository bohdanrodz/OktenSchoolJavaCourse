import IUser from "@/models/IUser";
import IPost from "@/models/IPost";
import IComment from "@/models/IComment";

const getUsers = async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}
const getUser = async (id: string): Promise<IUser> => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
}
const getPosts = async (): Promise<IPost[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}
const getPost = async (id: string): Promise<IPost> => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
}
const getComments = async (): Promise<IComment[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments/').then(res => res.json())
}
const getComment = async (id: string): Promise<IComment> => {
    return await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => res.json())
}
export {getUsers, getUser, getPosts, getPost, getComments, getComment}