import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {FirebaseClientResponse} from "../response/firebase-client-response";
import {OpenComponentsService} from "../open-components/open-components.service";


@Injectable({
    providedIn: 'root'
})
export class FireBaseRequestClientService {


    variable_to_wait: any


    clientRef: AngularFireObject<any>;
    clientsRef: AngularFireList<any>;
    clients = []
    last_client = ''

    myObserver = {
        next: (value: any) => this.variable_to_wait = value,
        error: (err: any) => console.log('Observer got an error: ' + err + '..'),
    };

    constructor(private db: AngularFireDatabase, private openComponentService: OpenComponentsService) {
    }

////CRUD
    public async getClients() {
        this.db.list('/clients').valueChanges().subscribe(this.myObserver);
        await this.spinner_delay()
        return this.variable_to_wait

    }


    public async getClient(client_key: string) {

        client_key = client_key.split('.',).join('-').split('@',).join('_')


        await this.delay(100) //// Questo cosino qua mi risolve alcuni problemi, controllare poi se mettendo questo cosino qui anche nelle altre chiamate rest api non cambia il comportamento dell'applicazione
        this.db.object('clients/' + client_key).valueChanges()
            .subscribe(this.myObserver);
        await this.spinner_delay()

        // Questo controllo è necessario poichè vi deve essere sempre un elemento nei prodotti
        // TODO riguardare se riprovando i flussi il comportamento del sistema non cambia
        if ( this.variable_to_wait != undefined && this.variable_to_wait.products == undefined ) {
            let products = []
            products.push({description: "", id: "", img_name_ref: "", name: "", type: "", price: 0})
            this.variable_to_wait.products = products
            this.addClient(this.variable_to_wait)
        }
        // Questo controllo è necessario poichè vi deve essere sempre un elemento nei prodotti


        return this.variable_to_wait
    }


    public async addClient(client: FirebaseClientResponse) {

        let client_key = client.email
        client_key = client_key.split('.',).join('-').split('@',).join('_')

        this.variable_to_wait = this.db.object('clients/' + client_key).update(client)
        await this.spinner_delay()

    }

    /* public async addClient(client: FirebaseClientResponse) {
         this.variable_to_wait = this.db.object('clients/' + client.email).update(client)
         await this.spinner_delay()

     }*/

    public async deleteClient(client_key: string) {
        this.variable_to_wait = this.db.object('clients/' + client_key).remove();
        await this.spinner_delay()
    }

////CRUD


    //other methods
    public async get_last_client_name() {
        this.db.list('/clients').snapshotChanges().subscribe(val => (this.variable_to_wait = val[val.length - 1].key))
        await this.spinner_delay()
    }


//other methods


    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async spinner_delay() {
        this.openComponentService.spinner = true
        while (this.variable_to_wait === undefined) {
            await this.delay(400)
        }
        this.openComponentService.spinner = false
    }


}
