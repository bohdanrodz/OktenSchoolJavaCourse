import {useCallback, useEffect, useMemo, useState} from "react";
import {User} from "./User.tsx";

export const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log('users', users);
    const foo = useCallback(() => {
        console.log('foo');
    }, []);
    const arr = useMemo(() => {
        return [11,22,33]
    }, []);
    return (
        <div>
            <p>users comp</p>
            <div>
                <User foo={foo} arr={arr} />
            </div>
        </div>
    );
};