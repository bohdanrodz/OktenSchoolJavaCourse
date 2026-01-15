import type {ReactNode} from "react";
import type ICommentDummyjson from "../../models/dummyjson/ICommentDummyjson.ts";
import './CommentDummyjson.css'

interface CommentDummyjsonProps {
    comment: ICommentDummyjson;
    children?: ReactNode;
}

export function CommentDummyjsonComponent({comment:{id,body, user:{fullName}}}: CommentDummyjsonProps) {
    return (
        <div className={'comment comment-dummyjson'}>
            <h3>Comment #{id} by {fullName}</h3>
            <p>{body}</p>
        </div>
    );
}