import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monkey } from '../Models/monkey';


@Injectable()
export class MonkeyService {

  url = 'https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json';

  constructor(private http: HttpClient) { }

  getAllMonkeys() : Observable<Array<Monkey>> {
    return this.http.get<Array<Monkey>>(this.url);
  }



}