import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Machine1Component } from './machine1/machine1.component';
import { Machine2Component } from './machine2/machine2.component';
import { Machine3Component } from './machine3/machine3.component';
import { Machine4Component } from './machine4/machine4.component';
import { Fault1Component } from './fault1/fault1.component';
import { Fault2Component } from './fault2/fault2.component';
import { Fault3Component } from './fault3/fault3.component';

@NgModule({
  declarations: [
    AppComponent,
    Machine1Component,
    Machine2Component,
    Machine3Component,
    Machine4Component,
    Fault1Component,
    Fault2Component,
    Fault3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'machine1',
        component: Machine1Component,
        children : [
          {
            path: 'fault1',
            component: Fault1Component
          },
          {
            path: 'fault2',
            component: Fault2Component
          },
          {
            path: 'fault3',
            component: Fault3Component
          }
        ]
      },
      {
        path: 'machine2',
        component: Machine2Component
      },
      {
        path: 'machine3',
        component: Machine3Component
      },
      {
        path: 'machine4',
        component: Machine4Component
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
