import type {FC} from "react";
import type ProductModel from "../../models/ProductModel.ts";
import type {Review} from "../../models/ProductModel.ts";
import {ReviewComponent} from "../ReviewComponent/ReviewComponent.tsx";
import './ReviewsComponent.css'

interface ReviewsProps {
    reviews: Review[] | null;
    product: ProductModel | null;
}

export const ReviewsComponent:FC<ReviewsProps> = ({reviews, product}) => {
    if (!reviews || reviews.length === 0 || !product) return null;

    return (
        <div className={'border-b'}>
            <h4 className={'text-2xl font-mono ml-2'}>Reviews for the {product.title}</h4>
            <div className={'reviews-container'}>
                {
                    reviews.map((review: Review, index) => <ReviewComponent review={review} key={index}/>)
                }
            </div>
        </div>
    );
};