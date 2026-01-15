import {useEffect, useState} from "react";
import type IPostDummyjson from "../../models/dummyjson/IPostDummyjson.ts";
import {postsService} from "../../service/api.service.ts";
import {PostDummyjsonComponent} from "./PostDummyjsonComponent.tsx";

export const PostsDummyjsonComponent = () => {
    const [posts, setPosts] = useState<IPostDummyjson[]>([])
    useEffect(() => {
        postsService.getAllFromDummyjson().then(data => setPosts(data))
        // const loadPosts = async () => {
        //     setPosts(await postsService.getAllFromDummyjson())
        // }
        // loadPosts()
    }, []);

    return (
        <div className={'posts-dummyjson'}>
            {posts.map(post => <PostDummyjsonComponent post={post} key={post.id}/>)}
        </div>
    );
};