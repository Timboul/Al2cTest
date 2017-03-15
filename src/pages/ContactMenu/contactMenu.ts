import {Component} from '@angular/core';

import { NavController } from 'ionic-angular';

import {Contacts, Contact} from 'ionic-native';

import {FicheContactComponent} from '../ContactFiche/contactFiche';

@Component({
    selector:'ContactMenu',
    templateUrl:'contactMenu.html'
})
export class ContactMenuComponent{

constructor(private _navController: NavController) {
      this.findContact('');
  }


// les contactes trouvés
  public allContacts:Contact[];

  /** Méthode pour effectuer la recherche de contact */
  public findContact(value:any){

    let fn = value === undefined ? '' :value;

    Contacts.find(['displayName', 'phoneNumbers'], {
      filter:fn,
      hasPhoneNumber:true
    }).then(data => {
      this.allContacts = data;      
    });
   /* if(this.allContacts.length == 0)
    {
        var c = Contacts.create();
        c.displayName = "test";
        this.allContacts.push(c);
    }*/
  } 


  
public contactFiche(c:Contact){
    this._navController.push(FicheContactComponent,{param1:c});
}

}