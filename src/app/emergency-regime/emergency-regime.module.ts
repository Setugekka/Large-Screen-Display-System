import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxEchartsModule} from 'ngx-echarts';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { EmergencyRegimeRoutingModule} from './emergency-regime-routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { InstitutionsComponent } from './institutions/institutions.component';
import { FileviewComponent } from './fileview/fileview.component';
import { WholeInstitutionComponent } from './whole-institution/whole-institution.component';

@NgModule({
  imports: [
    CommonModule,
    EmergencyRegimeRoutingModule,
    NgxEchartsModule,
    NgbModalModule
  ],
  entryComponents: [FileviewComponent],
  declarations: [PdfViewerComponent, InstitutionsComponent, FileviewComponent, WholeInstitutionComponent]
})
export class EmergencyRegimeModule { }
