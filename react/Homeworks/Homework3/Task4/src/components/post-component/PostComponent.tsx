import type IPost from "../../models/IPost.ts";
import type {FC, ReactNode} from "react";
import './PostComponent.css'

interface PostProps {
    post: IPost,
    children?: ReactNode
}

export const PostComponent:FC<PostProps> = ({post:{id,title,body}}) => {
    return (
        <div className={'post'}>
            <h3>Post #{id}</h3>
            <p className={'post-title'}>{title}</p>
            <p className={'post-body'}>{body}</p>
        </div>
    );
};