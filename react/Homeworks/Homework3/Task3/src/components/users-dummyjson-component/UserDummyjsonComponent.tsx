import type IUserDummyjson from "../../models/dummyjson/IUserDummyjson.ts";
import type {FC, ReactNode} from "react";
import './UserDummyjson.css'

type UserDummyjsonProps = {
    user: IUserDummyjson,
    children?: ReactNode
}

export const UserDummyjsonComponent:FC<UserDummyjsonProps> = ({user:{id, firstName, lastName, phone}}) => {
    return (
        <div className={'user user-dummyjson'}>
            <h3>User #{id}</h3>
            <h4>{firstName} {lastName}</h4>
            <p>{phone}</p>
        </div>
    );
};