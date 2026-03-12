import IPost from "@/models/IPost";
import {FC} from "react";

interface Props {
    post: IPost
}

export const PostComponent:FC<Props> = ({post:{id, title, body}}) => {
    return (
        <div>
            <h3>Post #{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};