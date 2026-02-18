import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div className={'users'}>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};