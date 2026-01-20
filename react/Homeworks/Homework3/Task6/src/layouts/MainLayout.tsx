import {Link, Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <Link to={'users'}>Users</Link>
            <br/>
            <hr/>
            <br/>
            <Outlet/>
        </>
    );
};