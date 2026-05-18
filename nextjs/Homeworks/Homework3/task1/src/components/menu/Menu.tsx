import Link from "next/link";
import './Menu.css'

export const Menu = () => {
    return (
        <div className={'menu'}>
            <ul>
                <li><Link href={'/cars'}>CARS</Link></li>
                <li><Link href={'/add-car'}>ADD CAR</Link></li>
            </ul>
        </div>
    );
};