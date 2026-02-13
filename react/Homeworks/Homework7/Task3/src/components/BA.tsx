import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const BA = () => {
    const {changeTheme} = useContext(ThemeContext)
    return (
        <div>
            <p>BA</p>
            <label className="switch">
                <input type="checkbox" onChange={(e)=>{
                    changeTheme(e.target.checked ? "dark" : "light")
                }}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}