import type {ReactNode} from "react";
import type PostModel from "../../models/PostModel.ts";
import './PostComponent.css'

interface PostProps {
    post: PostModel;
    children?: ReactNode;
}

export function PostComponent({post:{id, title, body, views},  children}:PostProps) {
    return (
        <div className={'post'}>
            <h3>Post #{id}: {title}</h3>
            <p>{body}</p>
            <p>Views: {views}</p>
            {children}
        </div>
    );
}