import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div className={'comments'}>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id} />)}
        </div>
    );
};