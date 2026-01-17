import type IUser from "../../models/IUser.ts";
import type {FC, ReactNode} from "react";
import './UserComponent.css'

interface UserProps {
    user: IUser;
    children?: ReactNode;
}
export const UserComponent:FC<UserProps> = ({user:{id, firstName,lastName, phone}}) => {
    return (
        <div className={'user'}>
            <h3>User #{id}</h3>
            <p>{firstName} {lastName}</p>
            <p>Call: {phone}</p>
        </div>
    );
};