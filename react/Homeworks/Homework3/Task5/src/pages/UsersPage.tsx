import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <>
            <Outlet/>
            <UsersComponent/>
        </>
    );
};