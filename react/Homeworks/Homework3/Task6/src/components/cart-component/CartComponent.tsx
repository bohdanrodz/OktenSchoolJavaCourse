import type {FC} from "react";
import type ICart from "../../models/ICart.ts";

interface CartProps {
    cart: ICart;
}

export const CartComponent:FC<CartProps> = ({cart:{totalQuantity,total}}) => {
    return (
        <p>{totalQuantity} products - ${total}</p>
    );
};