import type {ReactNode} from "react";
import type CommentModel from "../../models/CommentModel.ts";

interface CommentProps {
    comment: CommentModel;
    children?: ReactNode;
}

export function CommentComponent({comment:{id, body, likes}, children}: CommentProps) {
    return (
        <div className={'comment'}>
            <h3 className={'text-2xl'}>Comment #{id} has been liked by {likes} {likes === 1 ? 'user' : 'users'}.</h3>
            <p className={'text-blue-700 font-mono text-sm'}>{body}</p>
            {children}
        </div>
    );
}