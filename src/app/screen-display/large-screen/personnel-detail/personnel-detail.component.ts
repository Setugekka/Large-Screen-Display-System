import { Component, OnInit } from '@angular/core';
import {ScreenDisplayService} from '../../screen-display.service';

@Component({
  selector: 'app-personnel-detail',
  templateUrl: './personnel-detail.component.html',
  styleUrls: ['./personnel-detail.component.css']
})
export class PersonnelDetailComponent implements OnInit {
  private p_expert = 0;
  private p_repair = 0;
  private p_manager = 0;
  private current_city = null;
  constructor(private service: ScreenDisplayService) { }

  ngOnInit() {
    this.service.CountExpert(this.current_city).then(r => {
      this.p_expert = r.data;
    });
    this.service.CountRepair(this.current_city).then(r => {
      this.p_repair = r.data;
    });
    this.service.CountManager(this.current_city).then(r => {
      this.p_manager = r.data;
    });
  }

}
