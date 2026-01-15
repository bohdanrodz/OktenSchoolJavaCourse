import {useEffect, useState} from "react";
import type ICommentJsonplaceholder from "../../models/jsonplaceholder/ICommentJsonplaceholder.ts";
import {commentsService} from "../../service/api.service.ts";
import {CommentJsonplaceholderComponent} from "./CommentJsonplaceholderComponent.tsx";

export function CommentsJsonplaceholderComponent() {
    const [comments, setComments] = useState<ICommentJsonplaceholder[]>([])
    useEffect(() => {
        // commentsService.getAllFromJsonplaceholder()
        //     .then((data) => {setUsers(data)})
        const loadComments = async () => {
            setComments(await commentsService.getAllFromJsonplaceholder());
        }
        loadComments();
    },[])

    return (
        <div className={'comments-jsonplaceholder'}>
            {comments.map((comment: ICommentJsonplaceholder) => <CommentJsonplaceholderComponent comment={comment} key={comment.id}/>)}
        </div>
    );
}