import type {PostModel} from "../../models/PostModel.ts";
import {useEffect, useState} from "react";
import {fetchPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(()=>{
        fetchPosts().then(postArray => setPosts(postArray));

        // async function fillPosts(){
        //     const posts = await fetchPosts();
        //     setPosts(posts);
        // }
        // fillPosts();

    })
    return (
        <>
            <div className={'posts-container'}>
                {
                    posts.map((post: PostModel) => <PostComponent post={post} key={post.id}/>)
                }
            </div>
        </>
    );
};