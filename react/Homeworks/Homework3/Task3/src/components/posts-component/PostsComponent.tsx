import { Outlet } from "react-router";
import './Posts.css'

export const PostsComponent = () => {
    return (
        <div className={'posts-container'}>
            <Outlet/>
        </div>
    );
};