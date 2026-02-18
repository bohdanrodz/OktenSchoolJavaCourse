import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";


interface CommentProps {
    comment: IComment;
}

export const CommentComponent:FC<CommentProps> = ({comment:{id, name, body}}) => {
    return (
        <div className={'comment'}>
            <p>Comment #{id}</p>
            <p>{name}</p>
            <p>{body}</p>
        </div>
    );
};