import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileviewComponent implements OnInit {
  file_src = '/assets/pdf/test.pdf';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
