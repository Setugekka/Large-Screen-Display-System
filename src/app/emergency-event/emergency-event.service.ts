import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs'
import {Report} from './packages/report'

const httpOptions = {
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  )
}
@Injectable()
export class EmergencyEventService {

  constructor(private http:HttpClient) { }
  generateReportApi(newReport:Report):Observable<Report>{
    return this.http.post<Report>('http://localhost:5000/report/GenerateReportApi',newReport,httpOptions)
  }
}
