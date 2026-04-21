import './Menu.css'
import Link from "next/link";

export const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link href={'/'}>Homepage</Link></li>
                <li><Link href={'/cars'}>Cars</Link></li>
                <li><Link href={'/create-car'}>Add car</Link></li>
            </ul>
        </div>
    );
};