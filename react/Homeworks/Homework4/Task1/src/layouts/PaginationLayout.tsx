import {Outlet} from "react-router";
import {PaginationComponent} from "../components/PaginationComponent.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <PaginationComponent/>
            <Outlet/>
        </>
    );
};