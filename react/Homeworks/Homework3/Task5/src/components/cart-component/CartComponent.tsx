import type {ICart} from "../../models/ICart.ts";

interface CartProps {
    cart: ICart;
}

export function CartComponent({cart:{totalQuantity, total}}: CartProps) {
    return (
        <div className={'cart'}>
            <p>{totalQuantity} products - ${total}</p>
        </div>
    );
}