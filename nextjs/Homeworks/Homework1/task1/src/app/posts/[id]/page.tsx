import {FC} from "react";
import {getPost} from "@/services/api.service";
import {PostComponent} from "@/components/PostComponent";

interface Props {
    params: { id: string }
}

export const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params
    const post = await getPost(id)

    return (<PostComponent post={post}/>);
};

export default PostPage;
