import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const AA = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>
            <p>AA</p>
            <p>current theme is {theme}</p>
        </div>
    );
};