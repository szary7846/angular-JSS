import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { AppComponent } from './app.component';
import { XdddComponent } from './xddd/xddd.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, XdddComponent ],
  bootstrap:    [ HelloComponent ]
})
export class AppModule { }
