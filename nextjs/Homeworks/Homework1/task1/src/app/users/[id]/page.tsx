import {FC} from "react";

interface Props {
    params: {id:string};
}

export const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params
    return (
        <div>User id{id}</div>
    );
};

export default UserPage;