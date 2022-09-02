import { Component, OnInit } from '@angular/core';
import {FireBaseRequestOrderService} from "../../services/firebase/fire-base-request-order.service";

@Component({
  selector: 'app-consultant-feature-see-orders',
  templateUrl: './consultant-feature-see-orders.component.html'
})
export class ConsultantFeatureSeeOrdersComponent implements OnInit {



  orders: any

  constructor(private firebaseRequestOrderService: FireBaseRequestOrderService) { }

  async ngOnInit() {

    this.orders = await this.firebaseRequestOrderService.getOrders()
    await this.firebaseRequestOrderService.delay(1000)

  }
}
