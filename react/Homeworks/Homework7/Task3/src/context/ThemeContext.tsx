import {createContext} from "react";
type ThemeContextProps = {
    theme: string;
    changeTheme: (theme: string) => void;
}

const defaultValue = {
    theme: "white",
    changeTheme: (themeValue: string) => {
        console.log(themeValue);
    }
}
export const ThemeContext = createContext<ThemeContextProps>(defaultValue);