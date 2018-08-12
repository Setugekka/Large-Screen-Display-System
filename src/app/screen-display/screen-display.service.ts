import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { Urls} from '../shared/model/model.url';

@Injectable()
export class ScreenDisplayService {
  private urls = Urls;
  constructor(private http: Http) { }

  GetAllExpert():  void {
    // console.log(this.urls.GetAllExpert);
    const data = this.http.get(this.urls.GetAllExpert)
      .toPromise()
      .then(response => response.json());
    const res = data.then(r => {

    });
    // const data = this.http.get(this.urls.GetAllExpert);
    // const result = data.subscribe(r => this.rs = r.json());
    // console.log(result);
}
  CountExpert(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.CountExpert, { params: params})
    .toPromise()
    .then(response => response.json());
    return data;
  }
  CountRepair(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.CountRepair, { params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  CountManager(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.CountManager, { params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  GetExpertDist(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.GetExpertDist, { params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  GetRepairDist(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.GetRepairDist, { params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  GetManagerDist(city= null): any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.GetManagerDist, { params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
}

