import {FC} from "react";
import IUser from "@/models/IUser";

interface Props {
    user: IUser
}

export const UserComponent:FC<Props> = ({user:{id, name, username, email}}) => {
    return (
        <div>
            <h3>User #{id}</h3>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>{email}</p>
        </div>
    );
};