import {FC} from "react";
import {getUser} from "@/services/api.service";
import {UserComponent} from "@/components/UserComponent";

interface Props {
    params: {id:string};
}

export const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params
    const user = await getUser(id)

    return (<UserComponent user={user}/>);
};

export default UserPage;