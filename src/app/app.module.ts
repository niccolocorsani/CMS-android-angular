import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {
  ConsultantFeatureSeeOrdersComponent
} from "./components/consultant-feature-see-orders/consultant-feature-see-orders.component";
import {
  ConsultantECommerceFeaturesComponent
} from "./components/consultant-e-commerce-features/consultant-e-commerce-features.component";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {firebaseConfig} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [AppComponent, ConsultantFeatureSeeOrdersComponent, ConsultantECommerceFeaturesComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, MatStepperModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
    RouterModule.forRoot([],
    ), MatTabsModule, MatSelectModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy,}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
