import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-warning-detail',
  templateUrl: './warning-detail.component.html',
  styleUrls: ['./warning-detail.component.css']
})
export class WarningDetailComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
