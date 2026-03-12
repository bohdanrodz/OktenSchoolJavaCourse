import IComment from "@/models/IComment";

interface Props {
    comment: IComment;
}

export const CommentComponent = ({comment: {postId, id, name, body}}: Props) => {
    return (
        <div>
            <h3>Comment #{id}</h3>
            <p>{name}</p>
            <p>{body}</p>
            <br/>
            <p>replied to post #{postId}</p>
        </div>
    );
};