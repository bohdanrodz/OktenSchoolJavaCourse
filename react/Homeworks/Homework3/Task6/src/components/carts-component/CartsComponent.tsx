import {useEffect, useState} from "react";
import type ICart from "../../models/ICart";
import {cartsService} from "../../services/api.service.ts";
import {useParams} from "react-router";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) {
            cartsService.getByUserId(id).then(response => setCarts(response.carts))
        }
    }, []);
    return (
        <div className={'carts'}>
            {
                carts.map((cart: ICart) => <CartComponent cart={cart} key={cart.id}/>)
            }
        </div>
    );
};