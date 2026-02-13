import {type User, UserComponent} from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";

export const UsersComponent = () => {
    const users = useFetch<User[]>('https://jsonplaceholder.typicode.com/users', []);
    return (
        <div className={'users'}>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};