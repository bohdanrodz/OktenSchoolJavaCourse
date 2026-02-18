import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);
    return (
        <div className={'posts'}>
            {posts.map(post => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
};