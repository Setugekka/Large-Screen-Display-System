import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import {DetailviewComponent} from "./detailview/detailview.component";

@Component({
  selector: 'app-large-screen',
  templateUrl: './large-screen.component.html',
  styleUrls: ['./large-screen.component.css']
})
export class LargeScreenComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit() {
  }
  open(){
    const modalRef = this.modalService.open(DetailviewComponent);
    modalRef.componentInstance.name='Bo Xu'
  }
}
