import {FirebaseProductResponse} from "./firebase-product-response";
import {FirebaseClientResponse} from "./firebase-client-response";

export class OrderResponse {


    id: string;
    products: any;
    client: FirebaseClientResponse



    constructor(data?: any) {
        this.id = data ? data.id : null;
        this.products = data ? data.products : null;
        this.client = data ? data.client : null;
    }

}
