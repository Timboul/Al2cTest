import {Component, OnInit} from '@angular/core';
import { Facebook } from 'ionic-native';

@Component({
    selector:'testFb',
    templateUrl:'fbTest.html',
    providers:[Facebook]
})
export class fbTestComponent implements OnInit{


constructor(private fbSrv:Facebook){
    
}


ngOnInit(){
    Facebook.appInvite(new URL('test',''));
}



}