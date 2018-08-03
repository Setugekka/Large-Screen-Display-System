import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-dialog" >
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">修改信息</h4>
          <button type="button" class="close" (click)="activeModal.dismiss('Cross click')" >×</button>
        </div>
        <div class="modal-body">
          <label *ngFor="let a of head;let i = index">{{a}}:
            <input type="text" value = {{data[i]}} [(ngModel)] ="data[i]" >
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" (click)="activeModal.dismiss('Cross click')">确定</button>
        </div>
      </div>
    </div>  `
})

export class NgbdModalContentComponent {
  @Input() head;
  @Input() data;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DataTableComponent implements OnInit {
  closeResult: string;
  dtOptions: DataTables.Settings = {};
  title = 'app';
  head = [];
  edit = [];
  editing = {};
  click = false;
  @Input() data;
  @Input() datatable_click;
  constructor(private modalService: NgbModal) {
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.click = true;
  }

  // Open content with dark section
  openContent(row, head) {
      const modalRef = this.modalService.open(NgbdModalContentComponent);
      modalRef.componentInstance.data = row;
      modalRef.componentInstance.head = head;
  }
  setTimeout(a) {
    setTimeout(a , 1000);
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.head = this.data[0];
    this.data.splice(0, 1);
    console.log(this.data);
  }

}
