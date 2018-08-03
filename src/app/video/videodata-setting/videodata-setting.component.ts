import { Component, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
      <div class="modal-header">
        <h4 class="modal-title">Hi there!</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Hello, {{name}}!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-raised" (click)="activeModal.close('Close click')">Close</button>
      </div>
  `
})

export class NgbdModalContentComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-videodata-setting',
  templateUrl: './videodata-setting.component.html',
  styleUrls: ['./videodata-setting.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VideodataSettingComponent  {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  // Open default modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  // Open modal with dark section
  openModal(customContent) {
    this.modalService.open(customContent, { windowClass: 'dark-modal' });
  }

  // Open content with dark section
  openContent() {
    const modalRef = this.modalService.open(NgbdModalContentComponent );
    modalRef.componentInstance.name = 'World';
  }



}
