import {Component} from '@angular/core';

import { NavController } from 'ionic-angular';

import {Contacts, Contact} from 'ionic-native';

import {ContactMenuComponent} from '../ContactMenu/contactMenu';
import {RestTestComponent} from '../RestTest/restTest';
import {fbTestComponent} from '../fbTest/fbTest';

@Component({
    selector:'menuGeneral',
    templateUrl:'menuGeneral.html'
})
export class PageMenuGeneral{


constructor(private _navController: NavController) {
      
  }

  public goContactMenu(){
    this._navController.push(ContactMenuComponent);
  }

  public goRestTest(){
    this._navController.push(RestTestComponent);
  }

   public goFbTest(){
    this._navController.push(fbTestComponent);
  }
}