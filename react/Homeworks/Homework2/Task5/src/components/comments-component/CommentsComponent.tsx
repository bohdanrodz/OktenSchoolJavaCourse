import {useEffect, useState} from "react";
import type CommentModel from "../../models/CommentModel.ts";
import {fetchComments} from "../../services/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export function CommentsComponent() {
    const [comments, setComments] = useState<CommentModel[]>([])
    useEffect(() => {
        fetchComments().then((data:CommentModel[]) => setComments(data));
        // const fillComments = async () => {
        //     setComments(await fetchComments());
        // }
        // fillComments()
    }, []);

    return (
        <div className={'comments-container'}>
            {
                comments.map((comment: CommentModel) => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
}