import {useEffect, useState} from "react";
import type IPostJsonplaceholder from "../../models/jsonplaceholder/IPostJsonplaceholder.ts";
import {postsService} from "../../service/api.service.ts";
import {PostJsonplaceholderComponent} from "./PostJsonplaceholderComponent.tsx";

export const PostsJsonplaceholderComponent = () => {
    const [posts, setPosts] = useState<IPostJsonplaceholder[]>([])
    useEffect(() => {
        postsService.getAllFromJsonplaceholder()
            .then(data => {
                setPosts(data)
            })
        // const loadPosts = async () => {
        //     setPosts(await postsService.getAllFromJsonplaceholder())
        // }
        // loadPosts()
    }, []);

    return (
        <div className={'posts-jsonplaceholder'}>
            {posts.map(post => <PostJsonplaceholderComponent post={post} key={post.id}/>)}
        </div>
    );
};