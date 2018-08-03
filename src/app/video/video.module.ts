import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule} from './video-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';

import { DisplayComponent } from './display/display.component';
import { VideodataSettingComponent } from './videodata-setting/videodata-setting.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    FormsModule,
    NgxEchartsModule
  ],
  declarations: [DisplayComponent, VideodataSettingComponent]
})
export class VideoModule { }
