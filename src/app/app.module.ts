import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {RybuttonComponent} from './components/rybutton/rybutton.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
    HelloComponent, 
    RybuttonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
