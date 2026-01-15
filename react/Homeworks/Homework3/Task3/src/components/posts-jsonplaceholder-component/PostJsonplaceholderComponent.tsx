import type IPostJsonplaceholder from "../../models/jsonplaceholder/IPostJsonplaceholder.ts";
import type {ReactNode} from "react";
import './PostJsonplaceholder.css'

type PostJsonplaceholderProps = {
    post: IPostJsonplaceholder;
    children?: ReactNode;
}

export function PostJsonplaceholderComponent({post:{id,title,body}}:PostJsonplaceholderProps) {
    return (
        <div className={'post post-jsonplaceholder'}>
            <h3>Post #{id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
}