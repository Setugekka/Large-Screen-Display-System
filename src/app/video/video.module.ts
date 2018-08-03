import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VideoRoutingModule} from './video-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DisplayComponent } from './display/display.component';
import { VideodataSettingComponent, NgbdModalContentComponent  } from './videodata-setting/videodata-setting.component';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    FormsModule,
    NgxEchartsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [DisplayComponent, VideodataSettingComponent, NgbdModalContentComponent],
  entryComponents: [NgbdModalContentComponent]
})
export class VideoModule { }
