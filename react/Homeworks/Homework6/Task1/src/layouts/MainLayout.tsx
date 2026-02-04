import {Outlet} from "react-router";        // necessary imports
import Menu from "../components/menu/Menu.tsx";

export const MainLayout = () => {       // defining Main Layout
    return (
        <>
            <Menu/>     {/* adding Menu to the Main Layout */}
            <Outlet/>   {/* placeholder for child route components */}
        </>
    );
};