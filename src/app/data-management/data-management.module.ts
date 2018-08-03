import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataManagementRoutingModule} from './data-management-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartistModule} from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTablesModule} from 'angular-datatables';
import { FormsModule } from '@angular/forms';







import { InputFileComponent } from './input-file/input-file.component';
import { OperationLogComponent } from './operation-log/operation-log.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { DataTableComponent } from './data-table/data-table.component';
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
  ],
  declarations: [EditDataComponent, InputFileComponent, OperationLogComponent, DataTableComponent, MessageComponent],
})
export class DataManagementModule { }
