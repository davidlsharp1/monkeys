import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monkey } from '../../Models/monkey';
import { MonkeyService } from '../../Services/monkey.service';

@Component({
  selector: 'app-monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit {
  monkeys$: Observable<Array<Monkey>>;
  isBusy = false;

  constructor( private monkeyService: MonkeyService ) { }

  ngOnInit() {
    this.getMonkeys();
  }

  getMonkeys(){
    this.isBusy = true;
    this.monkeys$ = this.monkeyService.getAllMonkeys();
    this.isBusy = false;
  }



}