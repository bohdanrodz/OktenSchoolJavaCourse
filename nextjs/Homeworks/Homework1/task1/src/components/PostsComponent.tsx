import Link from "next/link";
import {getPosts} from "@/services/api.service";

export const PostsComponent = async () => {
    const posts = await getPosts();
    return (
        <div>
            {posts.map((post) => <div key={post.id}><Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link></div>)}
        </div>
    );
};