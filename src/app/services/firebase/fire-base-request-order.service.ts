import { Injectable } from '@angular/core';
import {OrderResponse} from '../response/order-response';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import {OpenComponentsService} from '../open-components/open-components.service';

@Injectable({
  providedIn: 'root'
})
export class FireBaseRequestOrderService {


  variabletToWait: any;
  orderRef: AngularFireObject<any>;
  ordersRef: AngularFireList<any>;
  orders = [];

  myObserver = {
    next: (value: any) => this.variabletToWait = value,
    error: (err: any) => console.log('Observer got an error: ' + err + '..'),
  };
  constructor(private db: AngularFireDatabase, private openComponentService: OpenComponentsService) { }
  public async getOrders() {
    this.db.list('/orders').valueChanges().subscribe(this.myObserver);
    await this.spinner_delay();
    return this.variabletToWait;

  }


  public async getOrder(orderkey: string) {
    await this.delay(100); //// Questo cosino qua mi risolve alcuni problemi,
    // controllare poi se mettendo questo cosino qui anche nelle altre chiamate rest api non cambia il comportamento dell'applicazione
    this.db.object('orders/' + orderkey).valueChanges()
        .subscribe(this.myObserver);
    await this.spinner_delay();
    return this.variabletToWait;
  }


  public async addOrder(order: OrderResponse) {
    this.variabletToWait = this.db.object('orders/' + order.id).update(order)
    await this.spinner_delay();

  }


  public async deleteOrder(orderkey: string) {
    this.variabletToWait = this.db.object('orders/' + orderkey).remove();
    await this.spinner_delay();
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  // eslint-disable-next-line @typescript-eslint/naming-convention
  async spinner_delay() {
    this.openComponentService.spinner = true;
    while (this.variabletToWait === undefined) {
      await this.delay(400);
    }
    this.openComponentService.spinner = false;
  }



}
