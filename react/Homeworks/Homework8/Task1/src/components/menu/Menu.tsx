import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <div className={'menu'}>
            <div className="menu-link"><Link to={'users'}>Users</Link></div>
            <div className="menu-link"><Link to={'posts'}>Posts</Link></div>
            <div className="menu-link"><Link to={'comments'}>Comments</Link></div>
            <div className="menu-link"><Link to={'complex'}>Complex</Link></div>
        </div>
    );
};