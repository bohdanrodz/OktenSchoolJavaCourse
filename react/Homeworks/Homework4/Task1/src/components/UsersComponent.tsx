import {useEffect, useState} from "react";
import type IUser from "../models/IUser.ts";
import {useSearchParams} from "react-router";
import {fetchUsers} from "../services/api.service.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [searchParams] = useSearchParams({page: '1'})
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        fetchUsers(currentPage).then(data => setUsers(data.users));
    }, [searchParams]);

    return (
        <div className={'users'}>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};