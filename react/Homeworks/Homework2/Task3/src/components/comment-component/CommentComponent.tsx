import type { FC } from "react";
import type CommentModel from "../../models/CommentModel.ts";
import './CommentComponent.css'

type CommentProps = {
    comment: CommentModel;
}

export const CommentComponent:FC<CommentProps> = ({comment:{email, name, body}}:CommentProps) => {
    return (
            <div className={'comment'}>
                <h3 className={'text-2xl font-mono'}>{name}</h3>
                <p className={'text-xl font-sans'}>{email}</p>
                <p className={'font-serif'}>{body}</p>
            </div>
    );
};