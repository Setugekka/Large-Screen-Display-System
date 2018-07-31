import { Component, OnInit } from '@angular/core';
import {Report} from '../packages/report'
import {EmergencyEventService} from '../emergency-event.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  newReport:Report=new Report();
  isSuccessful:string;
  fileAddress:string;
  constructor(private eeService:EmergencyEventService,private router:Router) { }

  ngOnInit() {

  }
  onClick(report:Report){
    this.fileAddress="http://localhost:5000/download/"
    this.eeService.generateReportApi(this.newReport).subscribe(res => this.isSuccessful = res['success'])

  }

}
