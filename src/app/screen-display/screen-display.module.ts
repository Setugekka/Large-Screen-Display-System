import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScreenDisplayRoutingModule} from './screen-display-routing.module';
import { LargeScreenComponent } from './large-screen/large-screen.component';
import { PersonnelComponent } from './large-screen/personnel/personnel.component';

@NgModule({
  imports: [
    CommonModule,
    ScreenDisplayRoutingModule
  ],
  declarations: [LargeScreenComponent, PersonnelComponent]
})
export class ScreenDisplayModule { }
