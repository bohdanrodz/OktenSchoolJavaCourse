import type {FC, ReactNode} from "react";
import type {IUser} from "../../models/IUser.ts";


interface UserProps {
    user: IUser;
    children?: ReactNode;
}

export const UserComponent:FC<UserProps> = ({user:{id,name}, children}) => {
    return (
        <div>
            <h3>
                {id} - {name}
            </h3>
            {children}
        </div>
    );
};