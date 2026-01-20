import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {cartsService} from "../../services/api.service.ts";
import type { ICart } from "../../models/ICart.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) {
            cartsService.getCartsByUser(id).then((response) => {setCarts(response.carts)})
        }
    },[id])

    return (
        <div className={'carts'}>
            {carts.map(cart => <CartComponent cart={cart} key={cart.id}/>)}
        </div>
    );
};