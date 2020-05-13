import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatTableModule, } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MonkeyService } from './Services/monkey.service';
import { MonkeyComponent } from './Components/MonkeyComponent/monkey.component';


@NgModule({
  imports: 
  [
     BrowserModule, 
     FormsModule, 
     HttpClientModule,
     MatTableModule, 
     MatCardModule, 
     MatButtonModule,
     MatProgressSpinnerModule, 
  ],
  declarations: [ AppComponent, MonkeyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MonkeyService]
})
export class AppModule { }
