import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-datatable',
  templateUrl: './single-datatable.component.html',
  styleUrls: ['./single-datatable.component.css']
})
export class SingleDatatableComponent implements OnInit {
  @Input() dOptions;
  @Input() model_title;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
