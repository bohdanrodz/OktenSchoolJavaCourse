import {FC} from "react";

interface Props {
    params: {id: string};
}

export const CommentPage:FC<Props> = async ({params}) => {
    const {id} = await params
    return (
        <div>Comment id{id}</div>
    );
};

export default CommentPage;