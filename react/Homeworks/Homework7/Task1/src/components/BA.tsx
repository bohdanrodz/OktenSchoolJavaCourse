import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const BA = () => {
    const {value, increment} = useContext(MyContext);
    return (
        <>
            <div>BA</div>
            <button onClick={()=> increment(value)}>UP!!!!</button>
        </>
    );
};