import {FC} from "react";
import {getComment} from "@/services/api.service";
import {CommentComponent} from "@/components/CommentComponent";

interface Props {
    params: {id: string};
}

export const CommentPage:FC<Props> = async ({params}) => {
    const {id} = await params
    const comment = await getComment(id)

    return (<CommentComponent comment={comment}/>);
};

export default CommentPage;