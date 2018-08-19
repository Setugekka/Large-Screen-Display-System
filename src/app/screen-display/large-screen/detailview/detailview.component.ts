import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {
  @Input() dOptions;
  @Input() model_title;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
