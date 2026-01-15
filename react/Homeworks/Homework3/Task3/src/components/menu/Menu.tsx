import { Link } from "react-router";
import './Menu.css'

export function Menu() {
    return (
        <div className="menu-container">
            <ul className={'menu'}>
                <Link to={'users/jsonplaceholder'}>Users jsonplaceholder</Link>
                <Link to={'users/dummyjson'}>Users dummyjson</Link>
                <Link to={'posts/jsonplaceholder'}>Posts jsonplaceholder</Link>
                <Link to={'posts/dummyjson'}>Posts dummyjson</Link>
                <Link to={'comments/jsonplaceholder'}>Comments jsonplaceholder</Link>
                <Link to={'comments/dummyjson'}>Comments dummyjson</Link>
            </ul>
        </div>
    );
}