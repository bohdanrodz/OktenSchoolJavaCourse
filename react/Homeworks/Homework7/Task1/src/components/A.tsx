import {AA} from "./AA.tsx";
import {useMemo} from "react";

export const A = () => {
    useMemo(() => {
        for (let i = 0; i < 1000; i++) {
            console.log(1);
        }
        return null;
    },[])
    return (
        <>
            <div>A</div>
            <br/>
            <AA/>
        </>
    );
};