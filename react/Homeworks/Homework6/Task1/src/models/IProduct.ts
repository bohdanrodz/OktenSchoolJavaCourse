export interface IProduct {     // inteface for product
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: string[];
    thumbnail: string;
}

interface IDimensions {     // assistive interface
    width: number;
    height: number;
    depth: number;
}

interface IReviews {        // assistive interface
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface IMeta {       // assistive interface
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}