import type {ReactNode} from "react";
import type ICommentJsonplaceholder from "../../models/jsonplaceholder/ICommentJsonplaceholder.ts";
import './CommentJsonplaceholder.css'

interface CommentJsonplaceholderProps {
    comment: ICommentJsonplaceholder;
    children?: ReactNode;
}

export function CommentJsonplaceholderComponent({comment:{body, id, name}}:CommentJsonplaceholderProps) {
    return (
        <div className={'comment comment-jsonplaceholder'}>
            <h3>Comment #{id}</h3>
            <h4>{name}</h4>
            <p>{body}</p>
        </div>
    );
}