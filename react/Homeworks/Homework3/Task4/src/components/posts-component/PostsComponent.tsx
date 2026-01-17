import {useEffect, useState} from "react";
import type IPost from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.ts";
import type {BaseResponseType} from "../../models/BaseResponseType.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getAll<BaseResponseType & {posts: IPost[]}>('/posts')
            .then(data => setPosts(data.posts))
    }, []);

    return (
        <div className={'posts-container'}>
            {
                posts.map(post => <PostComponent post={post} key={post.id} />)
            }
        </div>
    );
};