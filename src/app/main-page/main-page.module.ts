import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';

import { MainPageComponent } from './main-page.component';


@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,

  ],
  declarations: [
    MainPageComponent
  ]
})
export class MainPageModule { }
