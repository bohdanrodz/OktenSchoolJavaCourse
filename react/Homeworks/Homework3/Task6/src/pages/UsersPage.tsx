import {Outlet} from "react-router";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

export const UsersPage = () => {
    return (
        <>
            <Outlet/>
            <UsersComponent/>
        </>
    );
};