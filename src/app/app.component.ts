import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "./services/analytics/analytics.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private analyticsService: AnalyticsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logEvent() {
    this.analyticsService.logEvenet()
  }


  navigateToOrders() {
    this.router.navigate(['/orders']).then(page => {
      window.location.reload();
    });
  }

  navigateToAggiungiProdotto() {
    this.router.navigate(['/products']).then(page => {
      window.location.reload();
    });
  }
}
