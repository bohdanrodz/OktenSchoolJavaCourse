import {urls} from "../constants/urls.ts";
import type IUserJsonplaceholder from "../models/jsonplaceholder/IUserJsonplaceholder.ts";
import type IPostDummyjson from "../models/dummyjson/IPostDummyjson.ts";
import type IUserDummyjson from "../models/dummyjson/IUserDummyjson.ts";
import type IPostJsonplaceholder from "../models/jsonplaceholder/IPostJsonplaceholder.ts";
import type ICommentJsonplaceholder from "../models/jsonplaceholder/ICommentJsonplaceholder.ts";
import type ICommentDummyjson from "../models/dummyjson/ICommentDummyjson.ts";

const userService = {
    getAllFromJsonplaceholder: async ():Promise<IUserJsonplaceholder[]> => {
        return await fetch(urls.users.allUsersJsonplaceholder)
            .then(res => res.json())
    },
    getAllFromDummyjson: async ():Promise<IUserDummyjson[]> => {
        const response = await fetch(urls.users.allUsersDummyjson)
            .then(res => res.json())
        return response.users;
    }
}
const postsService = {
    getAllFromJsonplaceholder: async ():Promise<IPostJsonplaceholder[]> => {
        return await fetch(urls.posts.allPostsJsonplaceholder)
            .then(res => res.json())
    },
    getAllFromDummyjson: async ():Promise<IPostDummyjson[]> => {
        const response = await fetch(urls.posts.allPostsDummyjson)
            .then(res => res.json())
        return response.posts;
    }
}
const commentsService = {
    getAllFromJsonplaceholder: async ():Promise<ICommentJsonplaceholder[]> => {
        return await fetch(urls.comments.allCommentsJsonplaceholder)
            .then(res => res.json())
    },
    getAllFromDummyjson: async ():Promise<ICommentDummyjson[]> => {
        const response = await fetch(urls.comments.allCommentsDummyjson)
            .then(res => res.json())
        return response.comments
    }
}

export {userService, postsService, commentsService}