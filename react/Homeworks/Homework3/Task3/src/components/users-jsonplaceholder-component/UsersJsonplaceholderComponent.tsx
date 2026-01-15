import {useEffect, useState} from "react";
import type IUserJsonplaceholder from "../../models/jsonplaceholder/IUserJsonplaceholder.ts";
import {userService} from "../../service/api.service.ts";
import {UserJsonplaceholderComponent} from "./UserJsonplaceholderComponent.tsx";

export const UsersJsonplaceholderComponent = () => {
    const [users, setUsers] = useState<IUserJsonplaceholder[]>([])
    useEffect(() => {
        // userService.getAllFromJsonplaceholder().then(data => setUsers(data));
        const loadUsers = async () => {
            setUsers(await userService.getAllFromJsonplaceholder())
        }
        loadUsers()
    }, []);

    return (
        <div className={'users-jsonplaceholder'}>
            {users.map(user =>
                <UserJsonplaceholderComponent user={user} key={user.id}>
                    <p>{user.email}</p>
                </UserJsonplaceholderComponent>)}
        </div>
    );
};