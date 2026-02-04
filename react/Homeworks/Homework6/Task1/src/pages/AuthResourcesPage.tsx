import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {       // load products once when the page mounts
        loadAuthProducts().then(products => {
            console.log(products)   // log the products
        }).catch(reason => {    // refresh token if catching a problem
            console.log(reason);    // log the problem
            refresh()
                .then(() => loadAuthProducts())     // try to load product with new token
                .then(value => console.log(value))  // log the products
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};