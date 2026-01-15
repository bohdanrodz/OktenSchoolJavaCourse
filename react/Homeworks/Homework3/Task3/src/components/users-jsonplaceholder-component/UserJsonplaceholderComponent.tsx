import type IUserJsonplaceholder from "../../models/jsonplaceholder/IUserJsonplaceholder.ts";
import type {FC, ReactNode} from "react";
import './UserJsonplaceholder.css'

interface UserJsonplaceholderProps {
    user: IUserJsonplaceholder,
    children?: ReactNode
}

export const UserJsonplaceholderComponent:FC<UserJsonplaceholderProps> = ({user:{id,name,phone}, children}) => {
    return (
        <div className={'user user-jsonplaceholder'}>
            <h3>User #{id}</h3>
            <h4>{name}</h4>
            <p>{phone}</p>
            {children}
        </div>
    );
};