import {useEffect, useState} from "react";
import {userService} from "../../services/api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import type IUser from "../../models/IUser.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
       userService.getAll().then(users => setUsers(users))
    },[])

    return (
        <div className={'users'}>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};