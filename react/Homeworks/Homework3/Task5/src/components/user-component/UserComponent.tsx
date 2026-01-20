import type IUser from "../../models/IUser.ts";
import {type ReactNode} from "react";
import './UserComponent.css'
import {useNavigate} from "react-router";

interface UserProps {
    user: IUser;
    children?: ReactNode;
}

export function UserComponent({user:{firstName, lastName,id}}:UserProps) {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(`/users/${id}/carts`);
    }

    return (
        <div className={'user'}>
            <p className={''}>{firstName} {lastName}</p>
            <button className={'get-carts'} onClick={onButtonClick}>Get carts</button>
        </div>
    );
}