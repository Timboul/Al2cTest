import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import { PageMenuGeneral } from '../MenuGeneral/menuGeneral';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private formAuth : FormGroup;

  constructor(public navCtrl: NavController, private fb:FormBuilder) {
    this.formAuth = this.fb.group({
        emailUser:['',/*Validators.required*/],
        psdUser: ['',/*Validators.required*/] 
    });
  }


  clickAction(){
  //  let test = this.formAuth.get('emailUser');
   // console.log(test);

//if(this.formAuth.get('emailUser').value == "jesus@jesus.fr" && this.formAuth.get('psdUser').value == "jesus")
//{
  //this.navCtrl.push(PageMenuGeneral);
  this.navCtrl.setRoot(PageMenuGeneral);
//}
//else
//{ 
  //alert("Erreur mot de passe ou email")
 // }
}

 
}

