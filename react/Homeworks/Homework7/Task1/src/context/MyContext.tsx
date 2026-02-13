import {createContext} from "react";

type ContextType = {
    value: number;
    increment: (val: number) => void;
}

const defaultValue = {
    value: 1,
    increment: (val: number): void => console.log(val)
};

export const MyContext = createContext<ContextType>(defaultValue)