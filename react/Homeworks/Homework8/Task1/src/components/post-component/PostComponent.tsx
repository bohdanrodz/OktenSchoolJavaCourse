import type {FC, ReactNode} from "react";
import type {IPost} from "../../models/IPost.ts";


interface PostProps {
    post: IPost;
    children?: ReactNode;
}

export const PostComponent:FC<PostProps> = ({post:{title, id, body},children}) => {
    return (
        <div className={'post'}>
            <div>
                <h4>{id} - {title}</h4>
                <p>{body}</p>
            </div>
            {children}
        </div>
    );
};