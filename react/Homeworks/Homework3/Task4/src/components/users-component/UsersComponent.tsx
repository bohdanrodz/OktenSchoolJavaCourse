import {useEffect, useState} from "react";
import type IUser from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";
import type {BaseResponseType} from "../../models/BaseResponseType.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getAll<BaseResponseType & {users: IUser[]}>('/users')
            .then(data => setUsers(data.users))
    }, []);

    return (
        <div className={'users-container'}>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};