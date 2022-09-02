import {Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class AlertIonicService {

    // https://ionicframework.com/docs/api/alert

    constructor(public alertController: AlertController) {
    }


    async presentAlert(message: string, header: string, subHeader: string) {
        const alert = await this.alertController.create({
            header: header,
            subHeader: subHeader,
            message: message,
            buttons: ['OK']
        });

        await alert.present();

        const {role} = await alert.onDidDismiss();
    }
}
