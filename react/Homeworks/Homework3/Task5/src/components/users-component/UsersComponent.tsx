import {useEffect, useState} from "react";
import type IUser from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAllUsers().then(users => setUsers(users));
    }, []);

    return (
        <div className={'users'}>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};