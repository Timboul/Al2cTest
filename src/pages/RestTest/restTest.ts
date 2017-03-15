import {Component, OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from './rest';
import {restService} from './restService';

@Component({
    selector:'restTest',
    templateUrl:'restTest.html',
    providers:[restService]
})
export class RestTestComponent implements OnInit{

    private lesUser:User[];

constructor(private _navController: NavController, private rs:restService) {
    this.lesUser = null;
  }


ngOnInit(){
    
    this.rs.getUser().subscribe(res => 
       this.lesUser = res
    );
  //  console.log('aa0'+this.lesUser.values);
}



/*public afficheTestRest(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => { this.post = res;
    console.log(this.post);
    });
}*/



}