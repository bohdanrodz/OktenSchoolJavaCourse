import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string, defaultValue: T) => {
    const [data, setData] = useState<T>(defaultValue);
    useEffect(() => {
        fetch(url)
            .then(res => res.json() as Promise<T>)
            .then(response => setData(response))
    }, [url]);
    return data;
}