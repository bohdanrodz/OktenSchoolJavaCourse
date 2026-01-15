import { Outlet } from "react-router";
import "./Users.css"

export const UsersComponent = () => {
    return (
        <div className={'users-container'}>
            <Outlet/>
        </div>
    );
};