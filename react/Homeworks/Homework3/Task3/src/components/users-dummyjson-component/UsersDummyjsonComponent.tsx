import {useEffect, useState} from "react";
import type IUserDummyjson from "../../models/dummyjson/IUserDummyjson.ts";
import {userService} from "../../service/api.service.ts";
import {UserDummyjsonComponent} from "./UserDummyjsonComponent.tsx";

export const UsersDummyjsonComponent = () => {
    const [users, setUsers] = useState<IUserDummyjson[]>([])
    useEffect(() => {
        userService.getAllFromDummyjson().then(data => {setUsers(data)})
        // const loadUsers = async () => {
        //     setUsers(await userService.getAllFromDummyjson())
        // }
        // loadUsers()
    },[])

    return (
        <div className={'users-dummyjson'}>
            {users.map(user => <UserDummyjsonComponent user={user} key={user.id}/>)}
        </div>
    );
};