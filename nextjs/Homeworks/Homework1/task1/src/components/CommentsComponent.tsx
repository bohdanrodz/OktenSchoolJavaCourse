import {getComments} from "@/services/api.service";
import Link from "next/link";

export const CommentsComponent = async () => {
    const comments = await getComments();
    return (
        <div>
            {comments.map((comment) => <div key={comment.id}><Link href={`/comments/${comment.id}`}>{comment.id} {comment.name}</Link></div>)}
        </div>
    );
};