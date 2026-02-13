import type {FC} from "react";

export type User = {
    id: number;
    name: string;
};

interface Props {
    user: User
}

export const UserComponent:FC<Props> = ({user:{id, name}}) => {
    return (
        <div className={'user'}>
            {id} - {name}
        </div>
    );
};