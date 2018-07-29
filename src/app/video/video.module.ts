import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import {VideoRoutingModule} from './video-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule
  ],
  declarations: [DisplayComponent]
})
export class VideoModule { }
