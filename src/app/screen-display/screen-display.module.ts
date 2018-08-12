import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import {ScreenDisplayRoutingModule} from './screen-display-routing.module';
import { LargeScreenComponent } from './large-screen/large-screen.component';
import { PersonnelComponent } from './large-screen/personnel/personnel.component';
import {ScreenDisplayService} from './screen-display.service';

@NgModule({
  providers: [
    ScreenDisplayService
  ],
  imports: [
    CommonModule,
    ScreenDisplayRoutingModule,
    NgxEchartsModule
  ],
  declarations: [LargeScreenComponent, PersonnelComponent]
})
export class ScreenDisplayModule { }
