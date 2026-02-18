import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = useAppSelector(state => state);
    useEffect(() => {
        if (!users.length) dispatch(userActions.loadUsers())
        if (!posts.length) dispatch(postActions.loadPosts())
        if (!comments.length) dispatch(commentActions.loadComments())
    }, []);

    return (
        <div className={'complex-container'}>
            {
                users.map(user => <UserComponent user={user} key={user.id}>
                    {posts
                        .filter(post => post.userId === user.id)
                        .map(post => <PostComponent post={post} key={post.id}>
                            {comments
                                .filter(comment => comment.postId === post.id)
                                .map(comment => <CommentComponent comment={comment} key={comment.id}/>)
                            }
                        </PostComponent>)}
                </UserComponent>)
            }
        </div>
    );
};