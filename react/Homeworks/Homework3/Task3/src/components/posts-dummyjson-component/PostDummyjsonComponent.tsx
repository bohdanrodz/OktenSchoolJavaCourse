import type { ReactNode } from "react";
import type IPostDummyjson from "../../models/dummyjson/IPostDummyjson.ts";
import './PostDummyjson.css'

type PostDummyjsonProps = {
    post: IPostDummyjson;
    children?: ReactNode;
}

export function PostDummyjsonComponent({post:{id,title,body,reactions:{likes}}}: PostDummyjsonProps) {
    return (
        <div className={'post post-dummyjson'}>
            <h3>Post #{id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>Liked by {likes} people</p>
        </div>
    );
}