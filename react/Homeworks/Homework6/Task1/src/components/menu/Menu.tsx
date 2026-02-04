import {Link} from "react-router";  // necessary import

const Menu = () => {    // creating Menu component
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>     {/* creating links to different urls */}
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
            <hr/>   {/* horizontal line */}

        </div>
    );
};

export default Menu;    // exporting Menu Component