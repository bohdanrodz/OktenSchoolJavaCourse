import type IUser from "../../models/IUser";
import {type FC} from "react";
import {useNavigate} from "react-router";

interface UserProps {
    user: IUser
}

export const UserComponent:FC<UserProps> = ({user:{firstName,lastName,id}}) => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
        navigate(`/users/${id}/carts`)
    }

    return (
        <div className={'user'}>
            <p>{firstName} {lastName}</p>
            <button className={'get-carts'} onClick={onClickNavigate}>Get carts</button>
        </div>
    );
};