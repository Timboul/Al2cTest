import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {User} from './rest';

@Injectable()
export class restService {

constructor(private http:Http){}

  getUser (): Observable<User[]> {
      console.log('ok');
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                   .map(res => res.json());
                   
                   // .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

}