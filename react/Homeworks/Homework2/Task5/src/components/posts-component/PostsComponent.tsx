import {PostComponent} from "../post-component/PostComponent.tsx";
import {useEffect, useState} from "react";
import type PostModel from "../../models/PostModel.ts";
import {fetchPosts} from "../../services/api.service.ts";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        fetchPosts().then((data:PostModel[]) => setPosts(data));
        // const fillPosts = async () => {
        //     setPosts(await fetchPosts())
        // }
        // fillPosts();
    },[])
    return (
        <div className="posts-container">
            {
                posts.map((post: PostModel) =>
                    <PostComponent post={post} key={post.id}>
                        <p>tags</p>
                        <ul>{
                            post.tags.map((tag,index) => <li key={index}>{tag}</li>)
                        }</ul>
                    </PostComponent>)
            }
        </div>
    );
};