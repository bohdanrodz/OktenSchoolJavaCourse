import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {ThemeContext} from './context/ThemeContext.tsx';
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState<string>('light');
    return (
        <>
            <ThemeContext.Provider value={{
                theme: theme,
                changeTheme: (themeValue) => {
                    setTheme(themeValue)
                }
            }}>
                <A/>
                <hr/>
                <B/>
            </ThemeContext.Provider>

        </>
    )
}

export default App
