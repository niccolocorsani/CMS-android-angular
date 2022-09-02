import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OpenComponentsService {


    openClient = true;
    openConsultant = false;


    openAggiungiProdotti = false;
    openDialogRegister = false;
    openDialogNotification = false;
    openDialogMenu = true;
    spinner = false;
    openLogIn = false;
    openShowProducts = true;



    constructor() {

    }
}
