import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const AA = () => {
    const {value} = useContext(MyContext);
    return (
        <>
            <div>AA</div>
            <p>Current value is {value}</p>
        </>
    );
};