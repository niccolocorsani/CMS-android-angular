
export class FirebaseClientResponse {



    name: string;
    email: string;
    surname: string
    street: string;
    cap: string
    password: string
    products : any

    city: string
    phone: string


    constructor(data?: any) {
        this.name = data ? data.name : null;
        this.surname = data ? data.surname : null;
        this.cap = data ? data.cap : null;
        this.password = data ? data.password : null;
        this.street = data ? data.street : null;
        this.email = data ? data.email : null;
        this.products = data ? data.products : null;

        this.city = data ? data.city : null;
        this.phone = data ? data.phone : null;

    }
}
