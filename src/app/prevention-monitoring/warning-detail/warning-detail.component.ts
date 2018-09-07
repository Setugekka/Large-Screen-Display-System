import { Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-warning-detail',
  templateUrl: './warning-detail.component.html',
  styleUrls: ['./warning-detail.component.css']
})
export class WarningDetailComponent implements OnInit {
  @Input() city;
  @Input() message;
  title = '';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.title = this.city + '市最新预警'
    console.log(this.city);
  }

}
