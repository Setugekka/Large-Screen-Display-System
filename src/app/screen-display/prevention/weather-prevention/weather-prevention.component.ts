import { Component, OnInit } from '@angular/core';
import * as SocketIO from 'socket.io-client';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import {Urls} from '../../../shared/model/model.url';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PreventionModalComponent} from '../prevention-modal/prevention-modal.component';

@Component({
  selector: 'app-weather-prevention',
  templateUrl: './weather-prevention.component.html',
  styleUrls: ['./weather-prevention.component.css']
})
export class WeatherPreventionComponent implements OnInit {
  private  urls = Urls;
  private prevention_data = [];
  private obj: any;
  GetRainData():  any {
    const data = this.http_1.get(this.urls.GetRainData)
      .toPromise()
      .then(response => response.json());
    return data;
  }

  constructor(private http: HttpClient, private http_1: Http, private modalService: NgbModal) { }

  ngOnInit() {
    this.GetRainData().then(r => {
      console.log(r);
      this.prevention_data = r[1]['prevention'];
      this.obj = JSON.parse(String (this.prevention_data));
      for (const i of this.obj) {
        console.log(i.city);
      }
      // console.log(this.prevention_data);
    });
  }
  open_message(event) {
    // console.log(event['toElement'].id);
    const id = event['toElement'].id;
    const modalRef = this.modalService.open(PreventionModalComponent, {windowClass: 'Prevent_messageModalClass'});
    modalRef.componentInstance.url = 'http://127.0.0.1:5000/weather_data/rain_data_detail/' + id;
   // modalRef.componentInstance.url = 'www.baidu.com';
  }
}
