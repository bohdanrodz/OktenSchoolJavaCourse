import type {FC} from "react";
import type {Review} from "../../models/ProductModel.ts";
import './ReviewComponent.css'

interface ReviewProps {
    review: Review;
}

export const ReviewComponent:FC<ReviewProps> = ({review:{rating,comment,reviewerName}}) => {
    return (
        <div className={'review'}>
            <h4 className={'text-lg'}>{reviewerName} - {rating}/5</h4>
            <p>{comment}</p>
        </div>
    );
};