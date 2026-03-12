import {getUsers} from "@/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {

    const users = await getUsers();

    return (
        <div>
            {users.map((user) => <div key={user.id}><Link href={`/users/${user.id}`}>{user.id} {user.name}</Link></div>)}
        </div>
    );
};