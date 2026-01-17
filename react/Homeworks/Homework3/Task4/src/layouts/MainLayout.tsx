import {Link, Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <div className={'menu'}>
                <Link to={'users'}>Go to Users</Link>
                <Link to={'posts'}>Go to Posts</Link>
            </div>
            <Outlet/>
        </>
    );
};