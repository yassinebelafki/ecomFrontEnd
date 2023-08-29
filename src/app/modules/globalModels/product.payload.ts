import {ProductImagePayload} from "./productImage.payload";
import {ProductEvaluationPayload} from "./productEvaluation.payload";


export interface ProductPayload {
    id?:number,
    title: string,
    description: string,
    category: string,
    price: number,
    discount:number,
    quantity: number,
    banner?:any,
    bannerData?:any,
    productImagesDto?: ProductImagePayload[],
    productEvaluation?:ProductEvaluationPayload[]
    globalProductRating:number;

}
