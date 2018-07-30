import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemManagementRoutingModule} from "./system-management-routing.module";
import { AccessControlComponent } from './access-control/access-control.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SystemManagementRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
  ],
  declarations: [AccessControlComponent, UserManagementComponent]
})
export class SystemManagementModule { }
