import {Component} from '@angular/core';

import { NavController,NavParams} from 'ionic-angular';

import {Contacts, Contact,IContactField} from 'ionic-native';

@Component({
  selector: 'ficheContact',
  templateUrl:'contactFiche.html'  
})
export class FicheContactComponent{
    private cont:Contact;
    private numbers:IContactField[];
   
    constructor(private _navController: NavController,  private navParams: NavParams ){
        this.cont = navParams.get('param1');
        this.numbers = this.cont.phoneNumbers;
    }

}