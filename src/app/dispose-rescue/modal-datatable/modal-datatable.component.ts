import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-datatable',
  templateUrl: './modal-datatable.component.html',
  styleUrls: ['./modal-datatable.component.css']
})
export class ModalDatatableComponent implements OnInit {
  @Input() dOptionscity;
  @Input() dOptionsvillage;
  @Input() model_title;
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }
}
