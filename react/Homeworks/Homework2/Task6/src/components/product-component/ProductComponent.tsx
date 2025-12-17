import type ProductModel from "../../models/ProductModel.ts";
import type {ReactNode} from "react";
import './ProductComponent.css'

interface ProductProps {
    product: ProductModel,
    children?: ReactNode
}

export function ProductComponent(
    {product: {id, title, description, category, price, stock, rating, discountPercentage}, children}: ProductProps
) {
    return (
        <div className="product">
            <div className={'product__main-part'}>
                <h3 className={'text-3xl font-mono'}>#{id} {title}</h3>
                <div className={'product__base-info-wrapper'}>
                    <div className={'product__category-rating'}>
                        <p className={'text-xl'}>{category}</p>
                        <p className={'text-xl'}>Rating: {rating}</p>
                    </div>
                    <div className={'product__price-info'}>
                        <p className={'text-xl'}>Price: {price}</p>
                        <p className={'text-xl'}>Discount: {discountPercentage}%</p>
                        <p className={'text-xl'}>Stock: {stock}</p>
                    </div>
                </div>
                <p className={'text-lg font-serif'}>{description}</p>
            </div>
            {children}
        </div>
    );
}