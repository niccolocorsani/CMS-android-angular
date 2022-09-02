import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core'
import {firebaseConfig} from "../../../environments/environment";
import '@capacitor-community/firebase-analytics'
const {FirebaseAnalytics, Device} = Plugins

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
    this.initAnalytics()
  }

  async initAnalytics() {
    if ((await Device.getInfo()).platform == 'web') {
      alert('web')
      FirebaseAnalytics.initializeFirebase(firebaseConfig)
    }
  }


  setUser(){
    FirebaseAnalytics.setUserId({
      userId:'test123'
    })
  }


  logEvenet(){
    FirebaseAnalytics.logEvents({
      name: 'login',
      params:{
        method:'email'
      }
    })
  }

}
