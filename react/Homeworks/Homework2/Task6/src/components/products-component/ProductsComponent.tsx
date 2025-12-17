import {useEffect, useState} from "react";
import type ProductModel from "../../models/ProductModel.ts";
import { fetchProducts } from "../../services/api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {ReviewsComponent} from "../ReviewsComponent/ReviewsComponent.tsx";
import './ProductsComponent.css'

export function ProductsComponent() {
    const [products, setProducts] = useState<ProductModel[]>([])
    const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null)

    useEffect(() => {
        fetchProducts().then((products: ProductModel[]) => setProducts(products));

        // const fillProducts = async () => {
        //     setProducts(await fetchProducts());
        // };
        // fillProducts();
    }, []);


    const selectProduct = (product: ProductModel) => {
        setSelectedProduct(product)
    }

    return (
        <div>
            <ReviewsComponent reviews={selectedProduct?.reviews ?? null} product={selectedProduct}/>
            <div className="products-container">
                {
                    products.map((product: ProductModel) => {
                        return <ProductComponent product={product} key={product.id}>
                            <button onClick={() => selectProduct(product)}>See reviews</button>
                        </ProductComponent>
                    })}
            </div>
        </div>
    );
}