import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul className="menu">
            <li><Link to={'/'}>Main Page</Link></li>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'comments'}>Comments</Link></li>
            <li><Link to={'products'}>Products</Link></li>
        </ul>
    );
};