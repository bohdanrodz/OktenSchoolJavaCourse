import {useEffect, useState} from "react";
import {commentsService} from "../../service/api.service.ts";
import type ICommentDummyjson from "../../models/dummyjson/ICommentDummyjson.ts";
import {CommentDummyjsonComponent} from "./CommentDummyjsonComponent.tsx";

export function CommentsDummyjsonComponent() {
    const [comments, setComments] = useState<ICommentDummyjson[]>([])
    useEffect(() => {
        commentsService.getAllFromDummyjson().then(data => {setComments(data)})
        // const loadComments = async () => {
        //     setComments(await (commentsService.getAllFromDummyjson()));
        // }
        // loadComments()
    },[])

    return (
        <div className={'comments-dummyjson'}>
            {comments.map(comment => <CommentDummyjsonComponent comment={comment} key={comment.id}/>)}
        </div>
    );
}