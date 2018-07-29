import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {EditDataComponent} from './edit-data/edit-data.component';
import {InputFileComponent} from './input-file/input-file.component';
import {OperationLogComponent} from './operation-log/operation-log.component';


const routes: Routes = [
  {
    path: 'EditData',
    component: EditDataComponent,
    data: {
      title: 'EditData'
    },
  },
  {
    path: 'InputFile',
    component: InputFileComponent,
    data: {
      title: 'InputFile'
    },
  },
  {
    path: 'OperationLog',
    component: OperationLogComponent,
    data: {
      title: 'OperationLog'
    },
  },

];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DataManagementRoutingModule { }
