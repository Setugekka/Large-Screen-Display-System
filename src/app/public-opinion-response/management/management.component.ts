import { Component, OnInit } from '@angular/core';
import {Report} from "../../emergency-event/packages/report";
import {EmergencyEventService} from "../../emergency-event/emergency-event.service";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  newReport:Report=new Report();
  isSuccessful:string;
  fileAddress:string;
  constructor(private eeService:EmergencyEventService) { }

  ngOnInit() {

  }
  onClick(report:Report){
    this.fileAddress="http://localhost:5000/download/";
    this.eeService.generateReportApi(this.newReport).subscribe(res => this.isSuccessful = res['success']); // 成功返回true,失败返回false
  }

}
