import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul className="menu">
            <Link to={'users/jsonplaceholder'}>JSONPlaceholder Users</Link>
            <Link to={'users/dummyjson'}>DummyJSON Users</Link>
            <Link to={'posts/jsonplaceholder'}>JSONPlaceholder Posts</Link>
            <Link to={'posts/dummyjson'}>DummyJSON Posts</Link>
            <Link to={'comments/jsonplaceholder'}>JSONPlaceholder Comments</Link>
            <Link to={'comments/dummyjson'}>DummyJSON Comments</Link>

        </ul>
    );
};