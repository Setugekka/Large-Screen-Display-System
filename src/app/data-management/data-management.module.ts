import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementRoutingModule} from './data-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartistModule} from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTablesModule} from 'angular-datatables';








import { InputFileComponent } from './input-file/input-file.component';
import { OperationLogComponent } from './operation-log/operation-log.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { DataTableComponent, NgbdModalContentComponent } from './data-table/data-table.component';
import { MessageComponent} from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
    DataManagementRoutingModule,
    NgxDatatableModule,
    ChartistModule,
    NgbModule,
    MatchHeightModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditDataComponent,
    InputFileComponent,
    OperationLogComponent,
    DataTableComponent,
    MessageComponent,
    NgbdModalContentComponent],
  entryComponents: [NgbdModalContentComponent]
})
export class DataManagementModule { }
