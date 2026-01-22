import type {FC} from "react";
import type IUser from "../models/IUser.ts";

interface UserProps {
    user: IUser;
}

export const UserComponent:FC<UserProps> = ({user:{id,firstName,lastName}}) => {
    return (
        <div className={'user'}>
            <p>{id} - {firstName} {lastName}</p>
        </div>
    );
};