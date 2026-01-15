import { Outlet } from "react-router";
import './Comments.css'

export function CommentsComponent() {
    return (
        <div className={'comments-container'}>
            <Outlet/>
        </div>
    );
}