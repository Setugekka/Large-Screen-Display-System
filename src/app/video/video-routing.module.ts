import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {DisplayComponent} from './display/display.component';
import {VideodataSettingComponent} from './videodata-setting/videodata-setting.component';


const routes: Routes = [
  {
    path: 'Display',
    component: DisplayComponent,
    data: {
      title: 'Display'
    },
  },
  {
    path: 'VideodataSetting',
    component: VideodataSettingComponent,
    data: {
      title: 'VideodataSettingComponent'
    },
  },
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class VideoRoutingModule { }
