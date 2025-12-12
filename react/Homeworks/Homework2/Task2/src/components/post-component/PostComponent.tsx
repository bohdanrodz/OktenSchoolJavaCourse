import type {FC} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import './PostComponent.css'

type PropType = {
    post: PostModel;
}

export const PostComponent:FC<PropType> = ({post:{id, title, body}}:PropType) => {
    return (
        <>
            <div className={'post'}>
                <h3 className={'text-xl'}>{id} {title}</h3>
                <p>{body}</p>
            </div>
        </>
    );
};