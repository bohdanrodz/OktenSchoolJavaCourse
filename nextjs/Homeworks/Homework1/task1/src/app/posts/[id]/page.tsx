import {FC} from "react";

interface Props {
    params: { id: string }
}

export const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params
    return (
        <div>Post id{id}</div>
    );
};

export default PostPage;
