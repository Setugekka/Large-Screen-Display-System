import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: ['./fileview.component.css']
})

export class FileviewComponent implements OnInit {
  @Input() file_src
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
